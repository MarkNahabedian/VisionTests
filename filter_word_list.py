
SOURCE_LIST = "scrabble-word-list.txt"
OUTPUT_FILE = "word-list.txt"

with open(OUTPUT_FILE, "w") as out:
    with open(SOURCE_LIST, "r") as f:
        for word in f:
            # word includes trailiing newline.
            l = len(word) - 1
            if l >= 3 and l <= 8:
                out.write(word.lower())


