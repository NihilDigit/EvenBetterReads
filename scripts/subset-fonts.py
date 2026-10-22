import glob
import os
from fontTools.subset import main as subset_main

def build_subsets():
    chars = set()
    # Add ASCII & Latin-1 & French punctuation
    for code in range(0x20, 0x0250):
        chars.add(chr(code))
    # Add common CJK punctuation
    for code in range(0x3000, 0x303F):
        chars.add(chr(code))
    for code in range(0x2000, 0x206F):
        chars.add(chr(code))
    for code in range(0xFF00, 0xFFEF):
        chars.add(chr(code))

    for pattern in ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.astro', 'src/**/*.css']:
        for path in glob.glob(pattern, recursive=True):
            with open(path, 'r', encoding='utf-8') as f:
                chars.update(f.read())

    os.makedirs('public/fonts', exist_ok=True)
    chars_file = 'public/fonts/.subset-chars.txt'
    with open(chars_file, 'w', encoding='utf-8') as f:
        f.write(''.join(sorted(chars)))

    font_dir = os.path.expandvars(r'%LOCALAPPDATA%\Microsoft\Windows\Fonts')
    targets = [
        ('LXGWNeoZhiSong.ttf', 'public/fonts/LXGWNeoZhiSong-subset.woff2'),
        ('LXGWWenKai-Regular.ttf', 'public/fonts/LXGWWenKai-subset.woff2'),
    ]

    for src_name, out_path in targets:
        src_path = os.path.join(font_dir, src_name)
        if not os.path.exists(src_path):
            print(f'Skipping {src_name}: not found at {src_path}')
            continue
        args = [
            src_path,
            f'--text-file={chars_file}',
            '--flavor=woff2',
            f'--output-file={out_path}',
            '--layout-features=*',
        ]
        subset_main(args)
        size_kb = os.path.getsize(out_path) / 1024
        print(f'Generated {out_path} ({size_kb:.1f} KB)')

    if os.path.exists(chars_file):
        os.remove(chars_file)

if __name__ == '__main__':
    build_subsets()
