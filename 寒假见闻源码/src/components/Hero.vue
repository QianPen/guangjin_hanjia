<template>
  <section id="home" class="hero">
    <div class="hero-content">
      <h1 class="animate fadeIn">寒假见闻与收获</h1>
      <p class="animate fadeIn delay-1">记录寒假期间的所见所闻所感，展现生活新气象</p>
      <div class="hero-buttons animate fadeIn delay-2">
        <a href="#experience" class="btn btn-primary">开始探索</a>
        <a href="#about" class="btn btn-outline">了解更多</a>
      </div>
    </div>
    
    <div class="hero-scroll-indicator animate fadeIn delay-3">
      <span>向下滚动</span>
      <van-icon name="arrow-down" />
    </div>
    
    <div class="hero-overlay"></div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection'
};
</script>

<style lang="less" scoped>
.hero {
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-image: url('https://images.unsplash.com/photo-1612441804231-77a36b284856');
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  overflow: hidden;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  padding: 0 20px;
  
  h1 {
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 20px;
    letter-spacing: -1px;
    
    @media (max-width: 768px) {
      font-size: 3rem;
    }
    
    @media (max-width: 480px) {
      font-size: 2.5rem;
    }
  }
  
  p {
    font-size: 1.5rem;
    margin-bottom: 30px;
    opacity: 0.9;
    
    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
    
    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }
}

.hero-buttons {
  display: flex;
  justify-content: center;
  gap: 15px;
  
  @media (max-width: 480px) {
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
    
    .btn {
      margin-bottom: 10px;
    }
  }
}

.hero-scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  z-index: 2;
  animation: bounce 2s infinite;
  
  span {
    margin-bottom: 5px;
    font-size: 14px;
    opacity: 0.8;
  }
  
  .van-icon {
    font-size: 20px;
  }
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7));
  z-index: 1;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}
</style> 