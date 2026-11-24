with open('src/App.css', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, l in enumerate(lines):
    if 'ca-talk' in l:
        print(f"{i+1}: {l.strip()}")
