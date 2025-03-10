<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-logo">
          <h2>寒假见闻</h2>
          <p>记录寒假所见所闻，展现生活新气象</p>
        </div>
        
        <div class="footer-links">
          <div class="footer-links-group">
            <h3>导航</h3>
            <ul>
              <li><a href="#home">首页</a></li>
              <li><a href="#experience">见闻</a></li>
              <li><a href="#thoughts">感悟</a></li>
              <li><a href="#gallery">图集</a></li>
              <li><a href="#about">关于</a></li>
            </ul>
          </div>
          
          <div class="footer-links-group">
            <h3>相关链接</h3>
            <ul>
              <li><a href="https://www.gduf.edu.cn/" target="_blank">广东金融学院官网</a></li>
              <li><a href="https://www.gduf.edu.cn/xsgz/xsyd.htm" target="_blank">学生园地</a></li>
              <li><a href="https://www.gduf.edu.cn/xxgk/xxgk.htm" target="_blank">信息公开</a></li>
            </ul>
          </div>
          
          <div class="footer-links-group">
            <h3>联系我们</h3>
            <ul>
              <li><van-icon name="location-o" /> 广东省广州市天河区迎福路527号</li>
              <li><van-icon name="phone-o" /> 020-37216666</li>
              <li><van-icon name="envelop-o" /> webmaster@gduf.edu.cn</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>© {{ new Date().getFullYear() }} 广东金融学院 - 寒假见闻. 保留所有权利.</p>
        <p>爱校荣校 · 强国有我</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
};
</script>

<style lang="less" scoped>
.footer {
  background-color: var(--bg-color-light);
  padding: 60px 0 20px;
  margin-top: 60px;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 40px;
}

.footer-logo {
  flex: 0 0 100%;
  max-width: 300px;
  margin-bottom: 30px;
  
  h2 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 10px;
    color: var(--text-color);
  }
  
  p {
    color: var(--text-color-secondary);
    font-size: 14px;
  }
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  justify-content: space-between;
}

.footer-links-group {
  margin-bottom: 20px;
  min-width: 160px;
  
  h3 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 15px;
    color: var(--text-color);
  }
  
  ul {
    list-style: none;
    
    li {
      margin-bottom: 10px;
      
      a {
        color: var(--text-color-secondary);
        transition: color 0.3s;
        
        &:hover {
          color: var(--primary-color);
        }
      }
      
      .van-icon {
        margin-right: 5px;
        position: relative;
        top: 1px;
      }
    }
  }
}

.footer-bottom {
  border-top: 1px solid var(--border-color);
  padding-top: 20px;
  text-align: center;
  
  p {
    color: var(--text-color-light);
    font-size: 14px;
    margin-bottom: 5px;
  }
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
  }
  
  .footer-logo {
    max-width: 100%;
    text-align: center;
    margin-bottom: 40px;
  }
  
  .footer-links {
    justify-content: space-around;
  }
  
  .footer-links-group {
    flex: 0 0 45%;
  }
}

@media (max-width: 480px) {
  .footer-links-group {
    flex: 0 0 100%;
    text-align: center;
  }
}
</style> 