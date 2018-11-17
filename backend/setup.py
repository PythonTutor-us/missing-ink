from setuptools import setup

setup(
    name='missingink',
    version='0.1',
    py_modules=['missingink'],
    install_requires=[
        'Click',
        'Flask',
    ],
    entry_points='''
        [console_scripts]
        devserve=missingink.cli:baboon
    ''',
)