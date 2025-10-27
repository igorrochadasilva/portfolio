import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = './src/assets';
const outputDir = './src/assets/optimized';

// Criar diretório de saída se não existir
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Configurações de otimização
const sizes = [
  { name: 'thumbnail', width: 240, height: 120 }, // Para o grid
  { name: 'modal', width: 800, height: 400 },     // Para o modal
  { name: 'large', width: 1200, height: 600 }     // Para telas grandes
];

// Lista de imagens do portfolio
const portfolioImages = [
  'home-cinemark.webp',
  'home-nutricionista.webp',
  'home-enlite.webp'
];

async function optimizeImage(inputPath, outputPath, width, height) {
  try {
    await sharp(inputPath)
      .resize(width, height, {
        fit: 'cover',
        position: 'center'
      })
      .webp({ 
        quality: 85,
        effort: 6
      })
      .toFile(outputPath);
    
    const originalSize = fs.statSync(inputPath).size;
    const optimizedSize = fs.statSync(outputPath).size;
    const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
    
    console.log(`✅ ${path.basename(inputPath)} → ${path.basename(outputPath)} (${savings}% economia)`);
  } catch (error) {
    console.error(`❌ Erro ao otimizar ${inputPath}:`, error.message);
  }
}

async function optimizeAllImages() {
  console.log('🚀 Iniciando otimização das imagens do portfolio...\n');
  
  for (const imageName of portfolioImages) {
    const inputPath = path.join(inputDir, imageName);
    
    if (!fs.existsSync(inputPath)) {
      console.log(`⚠️  Imagem não encontrada: ${imageName}`);
      continue;
    }
    
    const baseName = path.parse(imageName).name;
    
    for (const size of sizes) {
      const outputPath = path.join(outputDir, `${baseName}-${size.name}.webp`);
      await optimizeImage(inputPath, outputPath, size.width, size.height);
    }
    
    console.log(''); // Linha em branco para separar imagens
  }
  
  console.log('✨ Otimização concluída!');
}

optimizeAllImages().catch(console.error);
