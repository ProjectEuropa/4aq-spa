<template>
  <div>
    <header>
      <div class="container text-center">
        <h1>4 Answers Quiz 4択クイズ&クイズ徹底解説</h1>
        <a href="/">
          <img class="header-nav__logo" src="/public/images/header-logo.png" />
        </a>
      </div>
      <nav class="navbar navbar-default navbar-static-top">
        <div class="container">
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle"
              data-toggle="collapse"
              data-target="#navbar-ex-collapse"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" id="header-nav__home" href="/">ホーム</a>
          </div>
          <div class="collapse navbar-collapse" id="navbar-ex-collapse">
            <ul class="nav navbar-nav navbar-right">
              <li>
                <a id="header-nav__login" href="/login">ログイン</a>
              </li>
              <li>
                <a id="header-nav__register" href="/register">ユーザー登録</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <main>
      <div class="container">
        <article class="col-md-8 col-xs-12">
          <section>
            <h2 class="quiz-question-h2">
              <img class="quiz-question__logo" src="public/images/what-is-mark.png" />
              第1問
            </h2>
            <p>正しい敬語を使った表現を１つ選んでください。</p>
            <div class="quiz-answer__list">
              <ul>
                <li>
                  <a>
                    <button>1</button>
                  </a>
                  受付でうかがってください。
                </li>
                <li>
                  <a>
                    <button>2</button>
                  </a>
                  課長がおっしゃったように、ファイルをご覧ください。
                </li>
                <li>
                  <a>
                    <button>3</button>
                  </a>
                  部長が申されたように進めていきます。
                </li>
                <li>
                  <a>
                    <button>4</button>
                  </a>
                  ○△商事の□□様がお越しになられました。
                </li>
                <!-- <li v-for="(answer, index) in answers">
                  <a>
                    <button
                      @click="goAnswer(index + 1)"
                      :disabled="isAnswerNotAlready"
                    >@{{ index + 1 }}</button>
                  </a>
                  @{{ answer }}
                </li>-->
              </ul>
            </div>
          </section>
          <section>
            <h2 class="quiz-correct-h2">
              <img class="quiz-correct__logo" src="public/images/correct-mark.png" />正解
            </h2>
            <p>
              <button class="quiz-correct-answer">1</button>
            </p>
            <button>正解を表示する</button>
            <div class="alert alert-info">
              <strong>正解!</strong>
            </div>
            <div class="alert alert-danger">
              <strong>不正解!</strong>
            </div>
          </section>
          <section >
            <h2 class="quiz-commentary-h2">
              <img class="quiz-commentary__logo" src="public/images/commentary-mark.png" />解説
            </h2>
            <div class="quiz-commentary__text">
              1）3）4）は、どこが間違っていたの？ <br>
              1）受付でうかがってください。<br>
              「うかがう」は謙譲語。謙譲語は自分または身内（自分の会社も含みます）の者に使う言葉で、相手に使うのは間違いです。<br>
              『受付でお尋ねください。』が正解です。<br><br>
              3）部長が申されたように進めていきます。<br>
              「申す」も謙譲語です。謙譲語にれる・られるを付けても尊敬語にはなりません。<br>
              『社長がおっしゃったように進めていきます。』が正解です。<br><br>
              4）○△商事の□□様がお越しになられました。<br>
              「なられました」は二重敬語の典型的な表現です。<br>
              『○△商事の□□様がお越しになりました。』が正解です。<br>
            </div>
            <button type="button" class="btn btn-primary center-block">次の問題へ</button>
            <button type="button" class="center-block">結果を見る</button>
          </section>
        </article>
        <sidebar />
      </div>
    </main>

    <footer>
      <div class="container text-center">
        <small>© {{new Date().getFullYear()}} 4Answers-quiz. All rights reserved.</small>
      </div>
    </footer>
  </div>
</template>

<script>
import Sidebar from "./Sidebar";

export default {
  components: {
    Sidebar
  },
  data() {
    return {};
  },
  mounted() {
  }
};
</script>
