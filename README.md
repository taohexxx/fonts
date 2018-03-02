# Fonts

Collection of patched fonts with programming ligature for Powerline, Font Awesome, and others.

Enjoy programming (especially on macOS).

## Font Lists

### Meslo

Meslo is based upon Apple's Menlo and contains programming ligature and many other symbols.

![meslo](https://github.com/taohex/fonts/blob/gh-pages/images/meslo.png)

## Usage

Double click `Meslo Regular Nerd Font Complete.otf` to install.

### iTerm2 (since 3.1)

`iTerm2` -> `Prefs...` -> `Profiles` -> `Text` -> `Change Font` -> select `Meslo Nerd Font`

`iTerm2` -> `Prefs...` -> `Profiles` -> `Text` -> check `Use Ligatures`

## Patch Your Own Fonts

### macOS

Find fonts with Font Book. Right click and `Show in Finder`.

```sh
brew install fontforge

# Option 1 (Recommended): generate Nerd Fonts
git clone https://github.com/ryanoasis/nerd-fonts
cd nerd-fonts/
# generate Menlo Regular Nerd Font Complete.otf
fontforge -script font-patcher --complete --progressbars --extension otf Menlo.ttc

# Option 2: generate Powerline fonts
git clone https://github.com/powerline/fontpatcher
cd fontpatcher/scripts/
# generate Menlo Regular for Powerline.otf
fontforge -script powerline-fontpatcher Menlo.ttc
```

