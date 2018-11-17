import click
from nltk import word_tokenize
from collections import defaultdict

@click.command()
@click.argument("foo")
def baboon(foo):
    with open(foo,"r") as fi:
        words = word_tokenize(fi.read())
    freq = defaultdict(lambda :0)
    for word in words:
        freq[word]+=1

    report = [(v,k) for k,v in freq.items()]
    report.sort(reverse=True)
    for x in report:
        print(x)


