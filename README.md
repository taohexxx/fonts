# Fonts

Collection of patched fonts with programming ligature for Powerline, Font Awesome, and others.

Enjoy programming (especially on macOS).

## Usage

Double click `Meslo Regular Nerd Font Complete.otf` to install.

### iTerm2 (since 3.1)

`iTerm2` -> `Prefs...` -> `Profiles` -> `Text` -> `Change Font` -> select `Meslo Nerd Font`

`iTerm2` -> `Prefs...` -> `Profiles` -> `Text` -> check `Use Ligatures`

### Visual Studio Code

```
// Controls the font family.
"editor.fontFamily": "'Meslo Nerd Font', Menlo, Monaco, 'Courier New', monospace",

// Enables font ligatures
"editor.fontLigatures": true,
```

### Atom

`Atom` -> `Prefs...` -> `Editor` -> `Font Family` -> fill in `Meslo Nerd Font`

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

