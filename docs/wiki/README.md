# Wiki Documentation

This directory contains the source files for the [Cosmic UI Lite GitHub Wiki](https://github.com/fuR-Gaming/cosmic-ui-lite/wiki).

## 📁 File Structure

| Local File | GitHub Wiki Page |
|------------|-------------------|
| `wiki-home.md` | [Home](https://github.com/fuR-Gaming/cosmic-ui-lite/wiki/Home) |
| `wiki-installation-setup.md` | [Installation & Setup](https://github.com/fuR-Gaming/cosmic-ui-lite/wiki/Installation-&-Setup) |
| `wiki-component-reference.md` | [Component Reference](https://github.com/fuR-Gaming/cosmic-ui-lite/wiki/Component-Reference) |
| `wiki-complete-examples.md` | [Complete Examples](https://github.com/fuR-Gaming/cosmic-ui-lite/wiki/Complete-Examples) |
| `wiki-troubleshooting.md` | [Troubleshooting](https://github.com/fuR-Gaming/cosmic-ui-lite/wiki/Troubleshooting) |
| `wiki-architecture-overview.md` | [Architecture Overview](https://github.com/fuR-Gaming/cosmic-ui-lite/wiki/Architecture-Overview) |

## 🔄 Updating Wiki Pages

### Method 1: GitHub Web Interface
1. Edit files locally in this directory
2. Copy content to GitHub Wiki pages manually
3. Save changes on GitHub

### Method 2: Git Clone Wiki (Batch Update)
```bash
# Clone wiki repository
git clone https://github.com/fuR-Gaming/cosmic-ui-lite.wiki.git temp-wiki

# Copy updated files
cp docs/wiki/wiki-home.md temp-wiki/Home.md
cp "docs/wiki/wiki-installation-setup.md" "temp-wiki/Installation-&-Setup.md"
cp "docs/wiki/wiki-component-reference.md" "temp-wiki/Component-Reference.md"
cp "docs/wiki/wiki-complete-examples.md" "temp-wiki/Complete-Examples.md"
cp "docs/wiki/wiki-troubleshooting.md" "temp-wiki/Troubleshooting.md"
cp "docs/wiki/wiki-architecture-overview.md" "temp-wiki/Architecture-Overview.md"

# Push to GitHub
cd temp-wiki
git add .
git commit -m "Update wiki documentation"
git push origin master
cd ..
rm -rf temp-wiki
```

## 📝 Content Guidelines

- **Keep in sync**: Local files should match GitHub wiki content
- **Test locally**: Preview markdown in your IDE before updating wiki
- **Link validation**: Ensure internal links work on GitHub wiki format
- **Code examples**: Test all code examples before publishing

## 🔗 Quick Links

- **Live Wiki**: https://github.com/fuR-Gaming/cosmic-ui-lite/wiki
- **Main Repository**: https://github.com/fuR-Gaming/cosmic-ui-lite
- **Issues**: https://github.com/fuR-Gaming/cosmic-ui-lite/issues

## 📊 Wiki Statistics

- **6 major pages** with comprehensive documentation
- **40+ code examples** from basic to advanced  
- **3,648+ lines** of documentation
- **Game engine integrations** (Phaser 3, PixiJS, Unity WebGL)
- **Framework integrations** (Vanilla JS, TypeScript, Webpack, Vite)