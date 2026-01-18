

def lengthOfLastWord(s:str):
    
    s = s.strip()
    words = s.split(' ')
    return len(words[-1])
    
    
    
print(f'Length of last word: {lengthOfLastWord("Hello World")}')