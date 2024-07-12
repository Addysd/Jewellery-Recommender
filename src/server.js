import express from 'express';
import multer from 'multer';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const __dirname = dirname(fileURLToPath(import.meta.url));

const archivePath = join(__dirname, 'archive');
if (!fs.existsSync(archivePath)) {
  fs.mkdirSync(archivePath);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, archivePath);  // Corrected to archivePath
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.post('/api/upload', upload.single('image'), (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).json({ error: 'No file uploaded.' });
  }
  res.status(200).json({ imageUrl: `/archive/${file.filename}` });
});

// Serve static files
app.use('/archive', express.static(archivePath));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
