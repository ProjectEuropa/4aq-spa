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
      <div class="container d-flex">
        <article class="col-md-8 col-xs-12">
          <section class="home-quiz__introduction">
            <h2 class="home-quiz__introduction-h2">
              <img class="home-quiz__introduction-h2-logo" src="/public/images/what-is-mark.png" />4 Answers Quizとは?
            </h2>
            <p>4 Answers Quizとはビジネスマナーから一般常識に至るまで様々なクイズを4択で出題するWEBアプリです。</p>
            <p>何度もトライしてみて正解率100%を目指してみてください。</p>
          </section>
          <section class="home-quiz__setting">
            <h2 class="home-quiz__setting-h2">
              <img class="home-quiz__setting-h2-logo" src="/public/images/directory-icon.png" />出題設定
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
            <h2 class="home-quiz__ranking-h2">
              <img class="home-quiz__ranking-h2-logo" src="/public/images/graph-icon.png" />ランキング
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
						<section class="home_quiz__ranking-chart">
							<chart />
						</section>
            <!-- <canvas id="chart" height="200" width="400"></canvas> -->
          </section>
          <section class="home__notice">
            <h2 class="home__notice-h2">
              <img class="home__notice-h2-logo" src="/public/images/news-icon.png" />お知らせ情報
            </h2>
            <dl>
              <dt>2019/08/23</dt>
              <dd>サイトを開設しました。</dd>
            </dl>
          </section>
        </article>
        <aside class="col-md-5 col-xs-12">
          <section id="sns-sections">
            <h3 class="text-center sidebar">SNS共有</h3>
            <!---<div id="sns-links">
              <a>
                <div
                  class="g-plus"
                  data-action="share"
                  data-height="24"
                  data-annotation="bubble"
                  data-href="http://syncer.jp/"
                ></div>
              </a>
              <a
                href="https://twitter.com/share"
                class="twitter-share-button"
                data-size="middle"
              >Tweet</a>
              <script>
  !(function(d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0],
      p = /^http:/.test(d.location) ? "http" : "https";
    if (!d.getElementById(id)) {
      js = d.createElement(s);
      js.id = id;
      js.src = p + "://platform.twitter.com/widgets.js";
      fjs.parentNode.insertBefore(js, fjs);
    }
  })(document, "script", "twitter-wjs");
              </script>
              <a
                href="http://b.hatena.ne.jp/"
                class="hatena-bookmark-button"
                data-hatena-bookmark-title="Syncer"
                data-hatena-bookmark-layout="vertical-balloon"
                data-hatena-bookmark-lang="ja"
                title="このエントリーをはてなブックマークに追加"
              >
                <img
                  src="https://b.st-hatena.com/images/entry-button/button-only@2x.png"
                  alt="このエントリーをはてなブックマークに追加"
                  width="20"
                  height="20"
                  style="border: none;"
                />
              </a>
              <a>
                <div
                  class="fb-like"
                  data-href
                  data-layout="button_count"
                  data-action="like"
                  data-show-faces="true"
                  data-share="false"
                ></div>
              </a>
              フェイスブックリンク先を修正すること
            </div>-->
          </section>
          <section id="keywords">
            <h3 class="text-center sidebar">キーワード集</h3>
            <ul class="keywords-texts-str-li">
              <li>
                <a href="/keyword?initial=A">Ａ</a>
                <a href="/keyword?initial=B">Ｂ</a>
                <a href="/keyword?initial=C">Ｃ</a>
                <a href="/keyword?initial=D">Ｄ</a>
                <a href="/keyword?initial=E">Ｅ</a>
                <a href="/keyword?initial=F">Ｆ</a>
                <a href="/keyword?initial=G">Ｇ</a>
                <a href="/keyword?initial=H">Ｈ</a>
                <a href="/keyword?initial=I">Ｉ</a>
                <a href="/keyword?initial=J">Ｊ</a>
              </li>
              <li>
                <a href="/keyword?initial=K">Ｋ</a>
                <a href="/keyword?initial=L">Ｌ</a>
                <a href="/keyword?initial=M">Ｍ</a>
                <a href="/keyword?initial=N">Ｎ</a>
                <a href="/keyword?initial=O">Ｏ</a>
                <a href="/keyword?initial=P">Ｐ</a>
                <a href="/keyword?initial=Q">Ｑ</a>
                <a href="/keyword?initial=R">Ｒ</a>
                <a href="/keyword?initial=S">Ｓ</a>
                <a href="/keyword?initial=T">Ｔ</a>
              </li>
              <li>
                <a href="/keyword?initial=U">Ｕ</a>
                <a href="/keyword?initial=V">Ｖ</a>
                <a href="/keyword?initial=W">Ｗ</a>
                <a href="/keyword?initial=X">Ｘ</a>
                <a href="/keyword?initial=Y">Ｙ</a>
                <a href="/keyword?initial=Z">Ｚ</a>
              </li>
              <li>
                <a href="/keyword?initial=あ">あ</a>
                <a href="/keyword?initial=い">い</a>
                <a href="/keyword?initial=う">う</a>
                <a href="/keyword?initial=え">え</a>
                <a href="/keyword?initial=お">お</a>
                <a href="/keyword?initial=か">か</a>
                <a href="/keyword?initial=き">き</a>
                <a href="/keyword?initial=く">く</a>
                <a href="/keyword?initial=け">け</a>
                <a href="/keyword?initial=こ">こ</a>
              </li>
              <li>
                <a href="/keyword?initial=さ">さ</a>
                <a href="/keyword?initial=し">し</a>
                <a href="/keyword?initial=す">す</a>
                <a href="/keyword?initial=せ">せ</a>
                <a href="/keyword?initial=そ">そ</a>
                <a href="/keyword?initial=た">た</a>
                <a href="/keyword?initial=ち">ち</a>
                <a href="/keyword?initial=つ">つ</a>
                <a href="/keyword?initial=て">て</a>
                <a href="/keyword?initial=と">と</a>
              </li>
              <li>
                <a href="/keyword?initial=な">な</a>
                <a href="/keyword?initial=に">に</a>
                <a href="/keyword?initial=ぬ">ぬ</a>
                <a href="/keyword?initial=ね">ね</a>
                <a href="/keyword?initial=の">の</a>
                <a href="/keyword?initial=は">は</a>
                <a href="/keyword?initial=ひ">ひ</a>
                <a href="/keyword?initial=ふ">ふ</a>
                <a href="/keyword?initial=へ">へ</a>
                <a href="/keyword?initial=ほ">ほ</a>
              </li>
              <li>
                <a href="/keyword?initial=ま">ま</a>
                <a href="/keyword?initial=み">み</a>
                <a href="/keyword?initial=む">む</a>
                <a href="/keyword?initial=め">め</a>
                <a href="/keyword?initial=も">も</a>
                <a href="/keyword?initial=ら">ら</a>
                <a href="/keyword?initial=り">り</a>
                <a href="/keyword?initial=る">る</a>
                <a href="/keyword?initial=れ">れ</a>
                <a href="/keyword?initial=ろ">ろ</a>
              </li>
              <li>
                <a href="/keyword?initial=や">や</a>
                <a href="/keyword?initial=ゆ">ゆ</a>
                <a href="/keyword?initial=よ">よ</a>
                <a href="/keyword?initial=わ">わ</a>
                <a href="/keyword?initial=を">を</a>
              </li>
            </ul>
          </section>
        </aside>
      </div>
    </main>

    <footer>
      <div class="container text-center">
        <small>© {{nowYear}} 4Answers-quiz. All rights reserved.</small>
      </div>
    </footer>
  </div>
</template>

<script>
import Chart from "./BarChart";

export default {
	components: {
		Chart,
	},
  data() {
    return {
      nowYear: ""
    };
  },
  mounted() {
    this.nowYear = new Date().getFullYear();
    // this.renderChart(
    //   {
    //     labels: ["January", "February", "March", "April", "May"],
    //     datasets: [
    //       {
    //         label: "Data One",
    //         backgroundColor: "#f87979",
    //         data: [40, 20, 12, 39, 10]
    //       }
    //     ]
    //   },
    //   {
		// 		responsive: true
		// 	}
    // );
  }
};
</script>
