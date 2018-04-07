# generate_gem_fix.py
Gem毎に固定するバージョンを出力する
```
# まずアップデート内容がない状態にする
$ bundle install

# bundle install のログを元にGemfile内で固定されていないgemのバージョンを出力する
# マイナーバージョンまで固定する
$ bundle install | python generate_gem_fix.py
gem 'rake', '~> 12.3'
gem 'concurrent-ruby', '~> 1.0'
gem 'i18n', '~> 0.9'
...
```
