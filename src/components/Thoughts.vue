<template>
  <section id="thoughts" class="section thoughts-section">
    <div class="container">
      <h2 class="section-title">寒假感悟</h2>
      <p class="section-subtitle">分享寒假期间的思考与收获，记录成长的点滴</p>
      
      <div class="thoughts-container">
        <div class="thought-card card" v-for="(thought, index) in thoughts" :key="index">
          <div class="thought-header">
            <div class="thought-icon">
              <van-icon :name="thought.icon" />
            </div>
            <h3 class="thought-title">{{ thought.title }}</h3>
          </div>
          <p class="thought-content">{{ thought.content }}</p>
          <div class="thought-footer">
            <span class="thought-date">{{ thought.date }}</span>
          </div>
        </div>
      </div>
      
      <div class="thoughts-quote">
        <div class="quote-container">
          <van-icon name="quote" class="quote-icon" />
          <blockquote>
            青春由磨砺而出彩，人生因奋斗而升华。作为新时代的大学生，我们要勇于担当、敢于奋斗，用实际行动书写无愧于时代的青春篇章。
          </blockquote>
          <div class="quote-author">— 寒假感悟</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ThoughtsSection',
  data() {
    return {
      thoughts: [
        {
          title: '家国情怀',
          content: '通过参观红色教育基地和观看爱国主义题材的影片，我深刻体会到了今天幸福生活的来之不易。作为新时代的青年，我们应该铭记历史，传承红色基因，培养家国情怀，为实现中华民族伟大复兴的中国梦贡献自己的力量。',
          date: '2025年1月25日',
          icon: 'flag-o'
        },
        {
          title: '责任担当',
          content: '在参与志愿服务的过程中，我深刻认识到社会责任的重要性。作为大学生，我们不仅要学好专业知识，更要培养社会责任感，积极参与社会实践，用实际行动回馈社会。只有这样，才能成为一个对社会有用的人。',
          date: '2025年2月1日',
          icon: 'friends-o'
        },
        {
          title: '文化传承',
          content: '春节期间，我参与了许多传统文化活动，如包饺子、贴春联、看春晚等。这些活动让我感受到了中华文化的魅力和家庭的温暖。我认识到，作为年轻一代，我们有责任传承和弘扬中华优秀传统文化，让这些宝贵的文化财富代代相传。',
          date: '2025年2月8日',
          icon: 'gift-o'
        },
        {
          title: '终身学习',
          content: '在假期中，我利用时间参加了一些线上课程，学习了金融分析和数据可视化的知识。在信息爆炸的时代，不断学习和提升自己的能力显得尤为重要。我深刻认识到，终身学习是适应社会发展的必然选择，只有不断学习，才能跟上时代的步伐。',
          date: '2025年2月15日',
          icon: 'bookmark-o'
        },
        {
          title: '感恩之心',
          content: '寒假期间，我更加深刻地体会到了父母的辛劳和付出。他们不仅为我提供了良好的生活条件，还给予了我无私的关爱和支持。我决定，要常怀感恩之心，珍惜当下的幸福生活，用优异的成绩和积极的态度回报父母的养育之恩。',
          date: '2025年2月20日',
          icon: 'like-o'
        },
        {
          title: '爱校荣校',
          content: '在与高中同学的交流中，我向他们介绍了广东金融学院的发展和变化。作为学校的一员，我为学校的进步和成就感到自豪。我认识到，爱校荣校不仅是一种情感，更是一种责任。我将以实际行动为学校的发展贡献自己的力量。',
          date: '2025年2月25日',
          icon: 'hotel-o'
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.thoughts-section {
  background-color: var(--bg-color-light);
}

.thoughts-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 50px;
}

.thought-card {
  padding: 25px;
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translateY(-10px);
  }
}

.thought-header {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.thought-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  
  .van-icon {
    font-size: 20px;
    color: white;
  }
}

.thought-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-color);
  margin: 0;
}

.thought-content {
  color: var(--text-color-secondary);
  line-height: 1.6;
  margin-bottom: 15px;
}

.thought-footer {
  display: flex;
  justify-content: flex-end;
}

.thought-date {
  font-size: 14px;
  color: var(--text-color-light);
}

.thoughts-quote {
  max-width: 800px;
  margin: 0 auto;
  padding: 30px 0;
}

.quote-container {
  position: relative;
  padding: 30px 40px;
  background-color: var(--bg-color-card);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow-light);
  text-align: center;
}

.quote-icon {
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 40px;
  background-color: var(--primary-color);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

blockquote {
  font-size: 18px;
  line-height: 1.6;
  color: var(--text-color);
  font-style: italic;
  margin: 0 0 15px;
}

.quote-author {
  font-size: 16px;
  color: var(--text-color-secondary);
}

@media (max-width: 768px) {
  .thoughts-container {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
  }
  
  .quote-container {
    padding: 25px 20px;
  }
  
  blockquote {
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  .thoughts-container {
    grid-template-columns: 1fr;
  }
}
</style> 