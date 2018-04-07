#!/usr/bin/env python
#-*- coding:utf-8 -*-

import sys
import re

REGEXP = re.compile("\d+.\d+")

def extract_gemfile(fn):
    res = {}
    with open(fn, 'r') as f:
        for line in f:
            col = line.lstrip().rstrip().split(' ')

            if col[0] != 'gem':
                continue

            m = REGEXP.search(line)
            gem_name = col[1][1:-2]
            if m:
                res[gem_name] = REGEXP.search(line).group(0)
            else:
                res[gem_name] = ''
    return res


def main():
    gem_version_dir = extract_gemfile('Gemfile')

    for line in sys.stdin:
        if 'Using' not in line:
            continue

        tmp_str, gem_name, gem_version = line.rstrip().split(' ')
        m = REGEXP.search(gem_version)

        if gem_name in gem_version_dir:
            if gem_version_dir[gem_name] == '':
                print('gem \'{}\', \'~> {}\''.format(
                        gem_name,
                        m.group(0)
                ))
        else:
            print('gem \'{}\', \'~> {}\''.format(
                    gem_name,
                    m.group(0)
            ))


if __name__ == '__main__':
    main()
