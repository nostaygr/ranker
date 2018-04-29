# Cookie のサイズは一般的に 4096 を上限とすることが多いが、
# omniauth の都合上これを上回るので仕方なくこのようにしておく。
# これがないと ActionDispatch::Cookies::CookieOverflow が発生する。
ActionDispatch::Cookies::MAX_COOKIE_SIZE = 4096 * 5
