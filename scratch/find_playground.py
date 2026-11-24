with open('src/App.jsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, l in enumerate(lines):
    if 'playground' in l.lower():
        print(f"{i+1}: {l.strip()}")
