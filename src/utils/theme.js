// 主题切换工具

// 主题类型
export const ThemeMode = {
  LIGHT: 'light',
  DARK: 'dark',
  AUTO: 'auto'
};

// 获取系统主题偏好
export const getSystemTheme = () => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? ThemeMode.DARK
    : ThemeMode.LIGHT;
};

// 设置主题
export const setTheme = (mode) => {
  // 从本地存储中获取用户设置的主题
  const storedTheme = localStorage.getItem('theme-mode');
  
  // 确定要应用的主题
  let themeToApply;
  
  if (mode) {
    // 如果传入了模式参数，使用该模式
    themeToApply = mode;
    // 保存到本地存储
    localStorage.setItem('theme-mode', mode);
  } else if (storedTheme) {
    // 如果本地存储中有主题设置，使用该设置
    themeToApply = storedTheme;
  } else {
    // 默认使用自动模式（跟随系统）
    themeToApply = ThemeMode.AUTO;
    localStorage.setItem('theme-mode', ThemeMode.AUTO);
  }
  
  // 应用主题
  if (themeToApply === ThemeMode.DARK || 
      (themeToApply === ThemeMode.AUTO && getSystemTheme() === ThemeMode.DARK)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  
  return themeToApply;
};

// 获取当前主题
export const getCurrentTheme = () => {
  const storedTheme = localStorage.getItem('theme-mode') || ThemeMode.AUTO;
  
  if (storedTheme === ThemeMode.AUTO) {
    return getSystemTheme();
  }
  
  return storedTheme;
};

// 切换主题
export const toggleTheme = () => {
  const currentTheme = getCurrentTheme();
  const newTheme = currentTheme === ThemeMode.DARK ? ThemeMode.LIGHT : ThemeMode.DARK;
  
  setTheme(newTheme);
  return newTheme;
};

// 监听系统主题变化
export const listenForThemeChanges = () => {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  
  const handleChange = () => {
    const storedTheme = localStorage.getItem('theme-mode');
    
    if (storedTheme === ThemeMode.AUTO) {
      setTheme(ThemeMode.AUTO);
    }
  };
  
  mediaQuery.addEventListener('change', handleChange);
  
  // 返回清理函数
  return () => {
    mediaQuery.removeEventListener('change', handleChange);
  };
}; 