if False:
    input = "This is my test input string. This is my test input string. This is another test input string to work on."


    wordlist = []
    wordlist = input.split(" ")
    print(wordlist)


    countlist = ["1"]
    wordindexlist = ["abcd"]



    for i in range(0,len(wordlist)-1):
        valuei = wordlist[i]
        try:
            index = wordindexlist.index(valuei)
        except ValueError as e:
            index = -1



        if index == -1:
            countlist.append(1)
            wordindexlist.append(valuei)
        else:
            countlist[index] += 1


    print(countlist)


from collections import defaultdict
from spellchecker import SpellChecker
import nltk
import json

input = "Thiss is my test inpaut string. This is myy test input string. This is another amaz ing test inp ut string to work onn.".lower()
input_tokenized = nltk.word_tokenize(input)

#print(input_tokenized)


word_count = defaultdict(lambda: 0)
#for index, element in enumerate(input_tokenized):
#    print(index, element)

for i in range(0,len(input_tokenized)):
    word_count[input_tokenized[i]] += 1

#rint(word_count)

word_map = {}
for key, value in word_count.items():
    if value in word_map:
        word_map[value].append(key)
    else:
        word_map[value] = [key]

#print(word_map)
#print(len(word_count))
#print(sum(word_count.values()))
#print(word_count["this"])
#print(word_map[1])


# Spell Checking: will create a new list of words "input_corrected" that is identical to input_tokenized, but corrected
input_corrected = input_tokenized.copy()
spell = SpellChecker()

corrections_map = {}



for i in range(len(input_corrected)):
    if len(spell.unknown([input_corrected[i]])) != 0:
        corrections_map[i] = next(iter(spell.unknown([input_corrected[i]])))

#print(corrections_map)

#Below will merge 2 words if they spell a word together
merge_map = {}
for key, value in corrections_map.items():
    if key != len(input_corrected)-1:
        if len(spell.unknown([value + input_corrected[key+1]])) == 0:
            merge_map[key] = value + input_corrected[key + 1]
    if key != 0:
        if len(spell.unknown([input_corrected[key-1] + value])) == 0:
            merge_map[key-1] = input_corrected[key-1] + value

for key in merge_map:
    input_corrected[key] = input_corrected[key] + input_corrected[key + 1]
    input_corrected[key+1] = ""
    if key in corrections_map:
        corrections_map.pop(key)
    if key+1 in corrections_map:
        corrections_map.pop(key+1)



#print(corrections_map)

for key, value in corrections_map.items():
  corrections_map[key] = spell.correction(value)

for key, value in corrections_map.items():
  input_corrected[key] = corrections_map[key]


i=0
while i < len(input_corrected):
    if input_corrected[i] == "":
        input_corrected.pop(i)
    i +=1


#print(input_corrected)





#text = 'This is a table. We should table this offer. The table is in the center.'
#text = nltk.word_tokenize(text)
grammer_input = nltk.pos_tag(input_corrected)

grammer_map = {}
grammer_map2 = {}
grammer_map_help = {"NN":"Noun","NNS":"Noun","NNP":"Noun","NNPS":"Noun","PRP":"Noun","JJ":"Adjective","JJR":"Adjective","JJS":"Adjective","VBD":"Verb","VBG":"Verb","VBN":"Verb"}

for i in range(len(grammer_input)):
    grammer_map[grammer_input[i][0]] = grammer_input[i][1]

for key, value in grammer_map.items():
    if value in grammer_map_help:
        grammer_map2[key] = grammer_map_help[value]



#print(grammer_map2)
    #if value in word_map:
    #    appearance_map[value].append(key)
    #else:
    #    appearance_map[value] = [key]



#result = [i for i in result if i[0].lower() == 'table']

print(word_count)
print(word_map)

print(corrections_map)
print(input_corrected)

print(grammer_map2)


json.dumps(word_count)
json.dumps(word_map)

json.dumps(corrections_map)
json.dumps(input_corrected)

json.dumps(grammer_map2)


'''
misspelled = spell.unknown(['something', 'is', 'hapenning', 'here'])
for word in misspelled:
    # Get the one `most likely` answer
    print(spell.correction(word))

    # Get a list of `likely` options
    print(spell.candidates(word))
'''




'''
for key, value in wordmap.items():
    if value in word_map:
        appearance_map[value].append(key)
    else:
        appearance_map[value] = [key]
'''


'''
word_map = {}
appearance_map = {}

input_tokenized.sort()

unique_element = set(input_tokenized)
print(unique_element)

for index, element in enumerate(input_tokenized):
    if element in unique_element:
        if element in appearance_map.keys():
            appearance_map[element] += 1
        else:
            appearance_map[element] = 1

#print(appearance_map)



for key, value in appearance_map.items():
    if value in word_map:
        word_map[value].append(key)
    else:
        word_map[value] = [key]

print(word_map)
'''
#for key in wordmap:
#   print (key, wordmap[key])

'''
wordcountlist = []
maxcount = 0
for key in wordmap:
    maxcount = max(wordmap[key],maxcount)
for i in range(maxcount+1):
    wordcountlist.append([])
for key in wordmap:
    wordcountlist[wordmap[key]].append(key)

for i in range(maxcount+1):
    wordcountlist[i].sort()
'''

# wordcountmap = {}
# maxcount = 0
# for key in wordmap:
#     maxcount = max(wordmap[key],maxcount)
# for i in range(maxcount+1):
#     wordcountmap[i] = []
# for key in wordmap:
#     wordcountmap[wordmap[key]].append(key)
#
# for key in range(maxcount+1):
#     wordcountmap[key].sort()
#
#
#
#
#
# print(wordcountmap)



'''
wordlist = []

i=0
input += " "
while i < len(input)-1:
    if input[i:i+1] != " ":
        j=1
        while input[i+j:i+j+1] != " ":
            j+=1
        wordlist.append(input[i:i+j])
        i += j
    else:
        i +=1
'''

#wordlist = []
#wordlist = input.split(" ")






