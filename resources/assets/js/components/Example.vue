<template>
  <div>
    <header>
      <div class="container text-center">
        <h1>Quiz 4択クイズ&クイズ徹底解説</h1>
        <a href="/">
          <img class="header-nav__logo" src="/public/images/header-logo.png" />
        </a>
      </div>
      <nav class="navbar navbar-default navbar-static-top">
        <div class="container">
          <div class="navbar-header">
            <a class="navbar-brand" id="home" href="/">ホーム</a>
          </div>
          <div class="navbar-header">
            <ul class="nav navbar-right">
              <li>
                <a class="navbar-brand header-nav__home" href="/login">ログイン</a>
              </li>
              <li>
                <a class="navbar-brand header-nav__register" href="/register">ユーザー登録</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <main>
      <div class="container">
        <article class="col-md-8 col-xs-12">
          <section class="home-quiz__introduction">
            <h2 id="what-is">
              <img id="what-is-mark" src="/public/images/what-is-mark.png" />4 Answers Quizとは?
            </h2>
            <p>4 Answers Quizとはビジネスマナーから一般常識に至るまで様々なクイズを4択で出題するWEBアプリです。</p>
            <p>何度もトライしてみて正解率100%を目指してみてください。</p>
          </section>
          <section class="home-quiz__setting">
            <h2 id="directory">
              <img id="directory-mark" src="/public/images/directory-icon.png" />出題設定
            </h2>
            <form action method="post">
              <label>
                <input type="checkbox" name="categories[]" value="1" checked />ビジネスマナー
              </label>
              <label>
                <input type="checkbox" name="categories[]" value="1" checked />一般常識
              </label>
              <label>
                <input type="checkbox" name="categories[]" value="1" checked />就職・転職
              </label>
              <label>
                <input type="checkbox" name="categories[]" value="1" checked />法律
              </label>
              <label>
                <input type="checkbox" name="categories[]" value="1" checked />IT
              </label>
              <label>
                <input type="checkbox" name="categories[]" value="1" checked />雑学
              </label>
              <div class>
                全項目チェック
                <button type="button" name="check_all" id="check-all" value="1">ON</button>
                <button type="button" name="check_all_off" id="check-all-off" value="1">OFF</button>
              </div>
              <button type="submit" class="btn btn-primary">出題開始</button>
              <input type="hidden" name="_token" value />
            </form>
          </section>
          <section class="home-quiz__ranking">
            <h2 id="graph">
              <img id="graph-mark" src="/public/images/graph-icon.png" />ランキング
            </h2>
            <div>
              <label>
                <input class="ranking-radio" type="radio" name="ranking-radio" value="1" checked />総合
              </label>
              <label>
                <input class="ranking-radio" type="radio" name="ranking-radio" value="2" />今月
              </label>
              <label>
                <input class="ranking-radio" type="radio" name="ranking-radio" value="3" />今週
              </label>
            </div>
            <canvas id="chart" height="200" width="400"></canvas>
          </section>
          <section class="home__notice">
            <h2 id="news">
              <img id="news-mark" src="/public/images/news-icon.png" />お知らせ情報
            </h2>
            <dl>
              <dt>2019/08/23</dt>
              <dd>サイトを開設しました。</dd>
            </dl>
          </section>
        </article>
      </div>
    </main>

    <footer>
      <div class="container text-center">
        <small>© 2019 4Answers-quiz. All rights reserved.</small>
      </div>
    </footer>
  </div>
</template>

<script>
</script>
