# Fonts

## Patch Your Own Fonts

### macOS

Find fonts with Font Book. Right click and `Show in Finder`.

```sh
brew install fontforge

# Option 1: generate Powerline
git clone https://github.com/powerline/fontpatcher
cd fontpatcher/scripts/
# generate Menlo Regular for Powerline.otf
fontforge -script powerline-fontpatcher Menlo.ttc

# Option 2 (Recommended): generate Nerd Font
git clone https://github.com/ryanoasis/nerd-fonts
cd nerd-fonts/
# generate Menlo Regular Nerd Font Complete.otf
fontforge -script font-patcher --complete --progressbars --extension otf Menlo.ttc
```

