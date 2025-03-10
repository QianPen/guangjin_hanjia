<template>
  <section id="experience" class="section experience-section">
    <div class="container">
      <h2 class="section-title">寒假见闻</h2>
      <p class="section-subtitle">记录寒假期间的所见所闻，分享生活中的点滴感动</p>
      
      <div class="experience-timeline">
        <div v-for="(item, index) in experiences" :key="index" class="timeline-item" :class="{ 'right': index % 2 !== 0 }">
          <div class="timeline-content card">
            <div class="timeline-date">{{ item.date }}</div>
            <h3 class="timeline-title">{{ item.title }}</h3>
            <div class="timeline-image" v-if="item.image">
              <img :src="item.image" :alt="item.title">
            </div>
            <p class="timeline-text">{{ item.content }}</p>
            <div class="timeline-tags">
              <span v-for="(tag, tagIndex) in item.tags" :key="tagIndex" class="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ExperienceSection',
  data() {
    return {
      experiences: [
        {
          date: '2025年1月20日',
          title: '家乡的变化',
          content: '回到家乡，发现家乡的变化真大。新建的文化广场成为了居民休闲娱乐的好去处，老人们在那里跳广场舞，孩子们在游乐设施上玩耍。街道更整洁了，绿化带也更美了。这些变化让我感受到了家乡的发展和进步，也让我为家乡的未来充满信心。',
          image: 'https://images.unsplash.com/photo-1518156677180-95a2893f3499',
          tags: ['家乡变化', '城市建设', '文化生活']
        },
        {
          date: '2025年1月25日',
          title: '参观红色教育基地',
          content: '今天和家人一起参观了当地的红色教育基地，了解了革命先辈们的英勇事迹。通过讲解员生动的讲述和丰富的展览，我深刻体会到了今天幸福生活的来之不易。作为新时代的青年，我们应该铭记历史，传承红色基因，为实现中华民族伟大复兴的中国梦贡献自己的力量。',
          image: 'https://images.unsplash.com/photo-1600443287227-11e534f7c18c',
          tags: ['红色教育', '爱国主义', '历史传承']
        },
        {
          date: '2025年2月1日',
          title: '志愿服务活动',
          content: '参加了社区组织的志愿服务活动，为独居老人送去了新春的祝福和慰问品。看到老人们脸上洋溢的笑容，我感到非常温暖。通过这次活动，我不仅体会到了奉献的快乐，也深刻认识到社会责任的重要性。作为大学生，我们应该积极参与社会实践，用实际行动回馈社会。',
          image: 'https://images.unsplash.com/photo-1593113630400-ea4288922497',
          tags: ['志愿服务', '社会责任', '关爱老人']
        },
        {
          date: '2025年2月8日',
          title: '家庭团圆',
          content: '春节期间，全家人团聚在一起，共度佳节。我们一起包饺子、贴春联、看春晚，其乐融融。这种传统的节日氛围让我感受到了中华文化的魅力和家庭的温暖。在与家人的交流中，我也收获了许多人生智慧，更加珍视亲情的可贵。',
          image: 'https://images.unsplash.com/photo-1582481725274-d63bce7cd7dc',
          tags: ['春节', '家庭团圆', '传统文化']
        },
        {
          date: '2025年2月15日',
          title: '线上学习充电',
          content: '利用假期时间，我参加了一些线上课程，学习了金融分析和数据可视化的知识。在信息爆炸的时代，不断学习和提升自己的能力显得尤为重要。通过这次学习，我不仅拓展了专业视野，也培养了自主学习的能力，为新学期的学习和未来的职业发展打下了基础。',
          image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8',
          tags: ['线上学习', '自我提升', '专业发展']
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.experience-section {
  background-color: var(--bg-color);
}

.experience-timeline {
  position: relative;
  max-width: 1200px;
  margin: 50px auto 0;
  
  &::after {
    content: '';
    position: absolute;
    width: 4px;
    background-color: var(--primary-color);
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 2px;
  }
}

.timeline-item {
  position: relative;
  width: 50%;
  padding: 0 40px 60px 0;
  
  &::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: var(--primary-color);
    border-radius: 50%;
    top: 20px;
    right: -10px;
    z-index: 1;
  }
  
  &.right {
    left: 50%;
    padding: 0 0 60px 40px;
    
    &::after {
      left: -10px;
      right: auto;
    }
  }
}

.timeline-content {
  padding: 20px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 20px;
    right: -15px;
    width: 0;
    height: 0;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    border-left: 15px solid var(--bg-color-card);
  }
  
  .right & {
    &::before {
      right: auto;
      left: -15px;
      border-left: none;
      border-right: 15px solid var(--bg-color-card);
    }
  }
}

.timeline-date {
  display: inline-block;
  padding: 5px 10px;
  background-color: var(--primary-color);
  color: white;
  border-radius: 4px;
  font-size: 14px;
  margin-bottom: 10px;
}

.timeline-title {
  font-size: 20px;
  margin-bottom: 15px;
  color: var(--text-color);
}

.timeline-image {
  margin-bottom: 15px;
  border-radius: var(--border-radius-small);
  overflow: hidden;
  
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: transform 0.3s;
    
    &:hover {
      transform: scale(1.05);
    }
  }
}

.timeline-text {
  color: var(--text-color-secondary);
  line-height: 1.6;
  margin-bottom: 15px;
}

.timeline-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  
  .tag {
    display: inline-block;
    padding: 4px 8px;
    background-color: var(--bg-color-light);
    color: var(--text-color-secondary);
    border-radius: 4px;
    font-size: 12px;
  }
}

@media (max-width: 768px) {
  .experience-timeline {
    &::after {
      left: 30px;
    }
  }
  
  .timeline-item {
    width: 100%;
    padding: 0 0 50px 60px;
    
    &::after {
      left: 20px;
      right: auto;
    }
    
    &.right {
      left: 0;
      padding: 0 0 50px 60px;
      
      &::after {
        left: 20px;
      }
    }
  }
  
  .timeline-content {
    &::before {
      right: auto;
      left: -15px;
      border-left: none;
      border-right: 15px solid var(--bg-color-card);
    }
  }
}
</style> 