<template>
  <section id="about" class="section about-section">
    <div class="container">
      <h2 class="section-title">关于我</h2>
      <p class="section-subtitle">广东金融学院学生的寒假见闻与收获</p>
      
      <div class="about-content">
        <div class="about-image">
          <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1" alt="广东金融学院">
        </div>
        
        <div class="about-text">
          <h3>爱校荣校 · 强国有我</h3>
          <p>我是广东金融学院的一名数据科学与大数据技术的学生（殷炳楠），这个寒假是我大学生活中一段宝贵的时光。在这段时间里，我不仅感受到了家乡的变化和家庭的温暖，还通过参观红色教育基地、参与志愿服务等活动，深刻体会到了社会责任和家国情怀的重要性。</p>
          <p>作为新时代的大学生，我们应该铭记历史，传承红色基因，培养家国情怀，为实现中华民族伟大复兴的中国梦贡献自己的力量。同时，我们也要不断学习，提升自己的能力，为未来的发展打下坚实的基础。</p>
          <p>通过这个网站，我希望能够分享我的寒假见闻与收获，展现生活新气象，弘扬社会正能量，繁荣校园网络文化，丰富学生寒假文化生活。</p>
          
        <div class="about-school">
            <h4>关于广东金融学院</h4>
            <p>广东金融学院是一所以经济学、管理学为主，法学、文学、理学、工学等多学科协调发展的省属普通本科院校，是华南地区金融人才培养和金融理论研究的重要基地。</p>
            <p>学校秉承"明德、敏学、笃行、致远"的校训，坚持"育人为本、质量立校、人才强校、特色兴校"的办学理念，致力于培养具有社会责任感、创新精神和实践能力的高素质应用型金融人才。</p>
        </div>
          
          <div class="about-buttons">
            <a href="https://www.gduf.edu.cn/" target="_blank" class="btn btn-primary">访问学校官网</a>
            <a href="#home" class="btn btn-outline">返回顶部</a>
          </div>
        </div>
      </div>
      
      <div class="about-values">
        <div class="value-card card">
          <div class="value-icon">
            <van-icon name="flag-o" />
          </div>
          <h3>爱国荣校</h3>
          <p>热爱祖国，热爱学校，以校为荣，为校争光，传承红色基因，弘扬爱国精神。</p>
        </div>
        
        <div class="value-card card">
          <div class="value-icon">
            <van-icon name="friends-o" />
          </div>
          <h3>责任担当</h3>
          <p>勇于担当社会责任，积极参与社会实践，用实际行动回馈社会。</p>
        </div>
        
        <div class="value-card card">
          <div class="value-icon">
            <van-icon name="bookmark-o" />
          </div>
          <h3>学习成长</h3>
          <p>不断学习，提升自己，培养创新精神和实践能力，为未来发展打下基础。</p>
        </div>
        
        <div class="value-card card">
          <div class="value-icon">
            <van-icon name="like-o" />
          </div>
          <h3>积极向上</h3>
          <p>保持积极向上的心态，传播正能量，展现青春活力，追求健康生活。</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection'
};
</script>

<style lang="less" scoped>
.about-section {
  background-color: var(--bg-color-light);
}

.about-content {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  margin-bottom: 60px;
}

.about-image {
  flex: 1;
  min-width: 300px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
  }
}

.about-text {
  flex: 2;
  min-width: 300px;
  
  h3 {
    font-size: 24px;
    margin-bottom: 20px;
    color: var(--text-color);
    position: relative;
    padding-bottom: 10px;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 50px;
      height: 3px;
      background-color: var(--primary-color);
    }
  }
  
  p {
    color: var(--text-color-secondary);
    line-height: 1.8;
    margin-bottom: 15px;
  }
}

.about-school {
  margin: 30px 0;
  padding: 20px;
  background-color: var(--bg-color-card);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow-light);
  
  h4 {
    font-size: 18px;
    margin-bottom: 15px;
    color: var(--text-color);
  }
  
  p {
    margin-bottom: 10px;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
}

.about-buttons {
  display: flex;
  gap: 15px;
  margin-top: 30px;
  
  @media (max-width: 480px) {
    flex-direction: column;
    
    .btn {
      width: 100%;
      text-align: center;
      margin-bottom: 10px;
    }
  }
}

.about-values {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
}

.value-card {
  padding: 30px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translateY(-10px);
  }
}

.value-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  
  .van-icon {
    font-size: 30px;
    color: white;
  }
}

.value-card h3 {
  font-size: 18px;
  margin-bottom: 15px;
  color: var(--text-color);
}

.value-card p {
  color: var(--text-color-secondary);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .about-content {
    flex-direction: column;
    gap: 30px;
  }
  
  .about-image {
    max-height: 300px;
  }
}
</style> 