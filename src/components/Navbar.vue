<template>
  <header class="navbar" :class="{ 'navbar-scrolled': scrolled }">
    <div class="container">
      <div class="navbar-content">
        <div class="navbar-logo">
          <h1>寒假见闻</h1>
        </div>
        
        <div class="navbar-menu" :class="{ 'active': menuActive }">
          <nav>
            <ul>
              <li><a href="#home" @click="closeMenu">首页</a></li>
              <li><a href="#experience" @click="closeMenu">见闻</a></li>
              <li><a href="#thoughts" @click="closeMenu">感悟</a></li>
              <li><a href="#gallery" @click="closeMenu">图集</a></li>
              <li><a href="#about" @click="closeMenu">关于</a></li>
            </ul>
          </nav>
        </div>
        
        <div class="navbar-actions">
          <button class="theme-toggle" @click="toggleTheme">
            <van-icon :name="currentTheme === 'dark' ? 'sunny-o' : 'moon-o'" />
          </button>
          
          <button class="menu-toggle" @click="toggleMenu">
            <van-icon :name="menuActive ? 'cross' : 'bars'" />
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import { getCurrentTheme, toggleTheme as toggleThemeUtil } from '../utils/theme';

export default {
  name: 'NavbarComponent',
  setup() {
    const scrolled = ref(false);
    const menuActive = ref(false);
    const currentTheme = ref(getCurrentTheme());
    
    // 监听滚动事件
    const handleScroll = () => {
      scrolled.value = window.scrollY > 50;
    };
    
    // 切换菜单
    const toggleMenu = () => {
      menuActive.value = !menuActive.value;
      
      // 当菜单打开时，禁止滚动
      if (menuActive.value) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    };
    
    // 关闭菜单
    const closeMenu = () => {
      menuActive.value = false;
      document.body.style.overflow = '';
    };
    
    // 切换主题
    const toggleTheme = () => {
      const newTheme = toggleThemeUtil();
      currentTheme.value = newTheme;
    };
    
    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // 初始检查
    });
    
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });
    
    return {
      scrolled,
      menuActive,
      currentTheme,
      toggleMenu,
      closeMenu,
      toggleTheme
    };
  }
};
</script>

<style lang="less" scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 20px 0;
  transition: all 0.3s;
  background-color: transparent;
  
  &.navbar-scrolled {
    background-color: var(--bg-color);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 12px 0;
  }
}

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-logo {
  h1 {
    font-size: 24px;
    font-weight: 600;
    color: var(--text-color);
    margin: 0;
  }
}

.navbar-menu {
  ul {
    display: flex;
    list-style: none;
    
    li {
      margin: 0 15px;
      
      a {
        color: var(--text-color);
        font-weight: 500;
        transition: color 0.3s;
        position: relative;
        padding: 5px 0;
        
        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--primary-color);
          transition: width 0.3s;
        }
        
        &:hover {
          color: var(--primary-color);
          
          &::after {
            width: 100%;
          }
        }
      }
    }
  }
}

.navbar-actions {
  display: flex;
  align-items: center;
  
  button {
    background: none;
    border: none;
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-color);
    transition: all 0.3s;
    
    &:hover {
      background-color: var(--bg-color-light);
    }
  }
  
  .theme-toggle {
    margin-right: 10px;
  }
  
  .menu-toggle {
    display: none;
  }
}

@media (max-width: 768px) {
  .navbar-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 70%;
    height: 100vh;
    background-color: var(--bg-color);
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
    transition: right 0.3s;
    padding: 80px 20px 20px;
    
    &.active {
      right: 0;
    }
    
    ul {
      flex-direction: column;
      
      li {
        margin: 15px 0;
        
        a {
          display: block;
          font-size: 18px;
        }
      }
    }
  }
  
  .navbar-actions {
    .menu-toggle {
      display: flex;
    }
  }
}
</style> 