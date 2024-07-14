import torch
import numpy as np
from sklearn.decomposition import PCA
from sklearn.metrics.pairwise import cosine_similarity
import matplotlib.pyplot as plt
from torchvision import transforms, models
from PIL import Image
import os
import torch.nn as nn

# Load the pre-trained models and saved features
clothes_features = np.load('/MYNTRA Hackeramp/model/clothes_features.npy')
jewellery_features = np.load('/MYNTRA Hackeramp/model/jewellery_features.npy')
clothes_clusters = np.load('/MYNTRA Hackeramp/model/clothes_kmeans_labels.npy')
jewellery_clusters = np.load('/MYNTRA Hackeramp/model/jewellery_kmeans_labels.npy')
best_matches = np.load('/MYNTRA Hackeramp/model/best_matches.npy')

# Perform PCA
pca = PCA(n_components=0.95)  # Retain 95% of the variance
clothes_features_reduced = pca.fit_transform(clothes_features)
jewellery_features_reduced = pca.transform(jewellery_features)

def get_image_paths(base_path, folders):
    image_paths = []
    for folder in folders:
        folder_path = os.path.join(base_path, folder)
        image_paths.extend([os.path.join(folder_path, filename) for filename in os.listdir(folder_path)])
    return image_paths

jewellery_base_path = 'data/tanishq-jewellery-dataset'
jewellery_folders = ['necklace', 'ring']
jewellery_image_paths = get_image_paths(jewellery_base_path, jewellery_folders)

# Load ResNet model
resnet = models.resnet50(pretrained=True)
resnet = nn.Sequential(*list(resnet.children())[:-1])  # Remove the last adaptive pooling layer
resnet.eval()  # Set to evaluation mode

class FeatureExtractor(nn.Module):
    def __init__(self, base_model):
        super(FeatureExtractor, self).__init__()
        self.base_model = base_model
        self.fc = nn.Linear(2048, 768)  # ResNet50 output is 2048 features

    def forward(self, x):
        x = self.base_model(x)
        x = x.view(x.size(0), -1)  # Flatten
        x = self.fc(x)  # Reduce to 768 features
        return x

model = FeatureExtractor(resnet)

# Transform for input image
transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),
])

def extract_feature_for_image(image_path):
    image = Image.open(image_path).convert('RGB')
    image = transform(image).unsqueeze(0)  # Add batch dimension
    with torch.no_grad():
        feature = model(image).cpu().numpy()
    return feature

def find_top_5_matches(clothing_image_path):
    clothing_feature = extract_feature_for_image(clothing_image_path)
    clothing_feature_reduced = pca.transform(clothing_feature)
    clothing_cluster = clothes_clusters[0]  # Use precomputed label

    most_similar_jewellery_cluster = best_matches[clothing_cluster]

    jewellery_indices_in_cluster = np.where(jewellery_clusters == most_similar_jewellery_cluster)[0]
    jewellery_in_cluster = jewellery_features_reduced[jewellery_indices_in_cluster]

    similarities = cosine_similarity(clothing_feature_reduced, jewellery_in_cluster).flatten()

    top_5_indices = similarities.argsort()[-5:][::-1]
    displayed_paths = set()
    for idx in top_5_indices:
        jewellery_image_path = jewellery_image_paths[jewellery_indices_in_cluster[idx]]
        if jewellery_image_path not in displayed_paths:
            displayed_paths.add(jewellery_image_path)
            jewellery_image = Image.open(jewellery_image_path)
            plt.imshow(jewellery_image)
            plt.title(f"Similarity: {similarities[idx]:.2f}")
            plt.show()
        if len(displayed_paths) >= 5:
            break

# Path to the clothing image (modify as per your directory structure)
clothing_image_path = 'data/dress-pattern-dataset/animal/3280.jpg'

# Display the input clothing image
ci = Image.open(clothing_image_path)
plt.imshow(ci)
plt.title("Input Clothing Image")
plt.show()

find_top_5_matches(clothing_image_path)
