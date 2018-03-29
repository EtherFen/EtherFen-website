<template lang="pug">
  #faq
    h1| 常见问题 Frequently Asked Questions
    .question-box(v-for="qa in qna" :key="question")
        question| {{qa.question}}？
        p.answer| {{qa.answer}}
</template>

<script>
import questions from '../data/faq.json';

export default {
  data() {
    return {
      qna: questions,
    };
  },
};
</script>


<style lang="stylus" scoped>
#faq {
    max-width: 50%;
    margin: 0 auto;
}

.question-box {
    padding: 8px 16px;
    background-color: #ecf8ff;
    border-radius: 4px;
    border-left: 5px solid #50bfff;
    margin: 20px 0;
    font-size: 14px;
    color: #5e6d82;
    line-height: 1.5em;
}

.question-box question {
    font-weight: 500;
    font-size: 1.3em;
}
</style>
