<template>
  <section id="gallery" class="section gallery-section">
    <div class="container">
      <h2 class="section-title">寒假图集</h2>
      <p class="section-subtitle">用镜头记录寒假的精彩瞬间，分享美好回忆</p>
      
      <div class="gallery-filter">
        <button 
          v-for="category in categories" 
          :key="category.value"
          :class="['filter-btn', { active: activeCategory === category.value }]"
          @click="setActiveCategory(category.value)"
        >
          {{ category.label }}
        </button>
      </div>
      
      <div class="gallery-grid">
        <div 
          v-for="(photo, index) in filteredPhotos" 
          :key="index"
          class="gallery-item"
          @click="showPhotoDetail(index)"
        >
          <div class="gallery-image">
            <img :src="photo.url" :alt="photo.title">
          </div>
          <div class="gallery-overlay">
            <h3>{{ photo.title }}</h3>
            <p>{{ photo.location }}</p>
          </div>
        </div>
      </div>
      
      <van-popup
        v-model:show="showDetail"
        closeable
        round
        position="center"
        :style="{ width: '90%', maxWidth: '800px', height: 'auto', maxHeight: '90%' }"
      >
        <div class="photo-detail" v-if="currentPhoto">
          <div class="photo-detail-image">
            <img :src="currentPhoto.url" :alt="currentPhoto.title">
          </div>
          <div class="photo-detail-info">
            <h3>{{ currentPhoto.title }}</h3>
            <p class="photo-location">
              <van-icon name="location-o" />
              {{ currentPhoto.location }}
            </p>
            <p class="photo-date">
              <van-icon name="clock-o" />
              {{ currentPhoto.date }}
            </p>
            <p class="photo-description">{{ currentPhoto.description }}</p>
            <div class="photo-tags">
              <span v-for="(tag, tagIndex) in currentPhoto.tags" :key="tagIndex" class="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </van-popup>
    </div>
  </section>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  name: 'GallerySection',
  setup() {
    const showDetail = ref(false);
    const currentPhotoIndex = ref(0);
    const activeCategory = ref('all');
    
    const categories = [
      { label: '全部', value: 'all' },
      { label: '家乡风景', value: 'hometown' },
      { label: '文化活动', value: 'culture' },
      { label: '志愿服务', value: 'volunteer' },
      { label: '家庭团聚', value: 'family' }
    ];
    
    const photos = [
      {
        url: 'https://images.unsplash.com/photo-1525095182007-3918ec2b5137',
        title: '家乡的日出',
        location: '广东省广州市',
        date: '2025年1月20日',
        description: '清晨的第一缕阳光洒在家乡的土地上，唤醒了沉睡的城市。这是我回家的第一天，早早起床，捕捉到了这美丽的瞬间。',
        category: 'hometown',
        tags: ['日出', '家乡', '风景']
      },
      {
        url: 'https://images.unsplash.com/photo-1518156677180-95a2893f3499',
        title: '新建的文化广场',
        location: '广东省广州市',
        date: '2025年1月21日',
        description: '家乡新建的文化广场成为了居民休闲娱乐的好去处，老人们在那里跳广场舞，孩子们在游乐设施上玩耍。这里已经成为了社区文化生活的中心。',
        category: 'hometown',
        tags: ['文化广场', '城市建设', '休闲娱乐']
      },
      {
        url: 'https://images.unsplash.com/photo-1600443287227-11e534f7c18c',
        title: '红色教育基地参观',
        location: '广东省广州市',
        date: '2025年1月25日',
        description: '参观当地的红色教育基地，了解革命先辈们的英勇事迹。通过讲解员生动的讲述和丰富的展览，深刻体会到了今天幸福生活的来之不易。',
        category: 'culture',
        tags: ['红色教育', '爱国主义', '历史传承']
      },
      {
        url: 'https://images.unsplash.com/photo-1593113630400-ea4288922497',
        title: '社区志愿服务',
        location: '广东省广州市',
        date: '2025年2月1日',
        description: '参加社区组织的志愿服务活动，为独居老人送去新春的祝福和慰问品。看到老人们脸上洋溢的笑容，感到非常温暖。',
        category: 'volunteer',
        tags: ['志愿服务', '社会责任', '关爱老人']
      },
      {
        url: 'https://images.unsplash.com/photo-1582481725274-d63bce7cd7dc',
        title: '全家福',
        location: '广东省广州市',
        date: '2025年2月8日',
        description: '春节期间，全家人团聚在一起，拍摄了这张珍贵的全家福。这种传统的节日氛围让我感受到了中华文化的魅力和家庭的温暖。',
        category: 'family',
        tags: ['春节', '家庭团圆', '传统文化']
      },
      {
        url: 'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342',
        title: '传统灯笼制作',
        location: '广东省广州市',
        date: '2025年2月10日',
        description: '参加了社区组织的传统灯笼制作活动，学习了这项传统手工艺。制作过程虽然复杂，但成品非常漂亮，也让我更加了解了中国传统文化。',
        category: 'culture',
        tags: ['传统手工艺', '灯笼', '文化活动']
      },
      {
        url: 'https://images.unsplash.com/photo-1549558549-415fe4c37b60',
        title: '家乡的夜景',
        location: '广东省广州市',
        date: '2025年2月15日',
        description: '夜幕降临，家乡的灯光亮起，城市呈现出另一种美。站在高处俯瞰，繁华的都市灯火辉煌，让人感叹家乡的发展变化。',
        category: 'hometown',
        tags: ['夜景', '城市', '灯光']
      },
      {
        url: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae',
        title: '环保志愿活动',
        location: '广东省广州市',
        date: '2025年2月20日',
        description: '参加了当地的环保志愿活动，清理公园垃圾，宣传环保理念。通过实际行动，为保护环境贡献自己的一份力量。',
        category: 'volunteer',
        tags: ['环保', '志愿服务', '公益活动']
      }
    ];
    
    const filteredPhotos = computed(() => {
      if (activeCategory.value === 'all') {
        return photos;
      }
      return photos.filter(photo => photo.category === activeCategory.value);
    });
    
    const currentPhoto = computed(() => {
      return filteredPhotos.value[currentPhotoIndex.value];
    });
    
    const showPhotoDetail = (index) => {
      currentPhotoIndex.value = index;
      showDetail.value = true;
    };
    
    const setActiveCategory = (category) => {
      activeCategory.value = category;
    };
    
    return {
      showDetail,
      currentPhotoIndex,
      activeCategory,
      categories,
      photos,
      filteredPhotos,
      currentPhoto,
      showPhotoDetail,
      setActiveCategory
    };
  }
};
</script>

<style lang="less" scoped>
.gallery-section {
  background-color: var(--bg-color);
}

.gallery-filter {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 30px;
  gap: 10px;
}

.filter-btn {
  padding: 8px 16px;
  border: none;
  background-color: var(--bg-color-light);
  color: var(--text-color-secondary);
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 14px;
  
  &:hover {
    background-color: var(--primary-color);
    color: white;
  }
  
  &.active {
    background-color: var(--primary-color);
    color: white;
  }
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

.gallery-item {
  position: relative;
  border-radius: var(--border-radius);
  overflow: hidden;
  cursor: pointer;
  height: 250px;
  
  &:hover {
    .gallery-overlay {
      opacity: 1;
    }
    
    .gallery-image img {
      transform: scale(1.1);
    }
  }
}

.gallery-image {
  width: 100%;
  height: 100%;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s;
  }
}

.gallery-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
  opacity: 0;
  transition: opacity 0.3s;
  
  h3 {
    color: white;
    margin: 0 0 5px;
    font-size: 18px;
  }
  
  p {
    color: rgba(255, 255, 255, 0.8);
    margin: 0;
    font-size: 14px;
  }
}

.photo-detail {
  padding: 20px;
}

.photo-detail-image {
  width: 100%;
  max-height: 400px;
  overflow: hidden;
  border-radius: var(--border-radius-small);
  margin-bottom: 20px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.photo-detail-info {
  h3 {
    font-size: 20px;
    margin: 0 0 15px;
    color: var(--text-color);
  }
}

.photo-location,
.photo-date {
  display: flex;
  align-items: center;
  color: var(--text-color-secondary);
  margin-bottom: 10px;
  font-size: 14px;
  
  .van-icon {
    margin-right: 5px;
  }
}

.photo-description {
  color: var(--text-color-secondary);
  line-height: 1.6;
  margin-bottom: 15px;
}

.photo-tags {
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
  .gallery-grid {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 15px;
  }
  
  .gallery-item {
    height: 200px;
  }
}

@media (max-width: 480px) {
  .gallery-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }
  
  .gallery-item {
    height: 250px;
  }
  
  .gallery-overlay {
    opacity: 1;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
  }
}
</style> 