import { useEffect, useState } from 'react';

const UseThemeSwitcher = () => {
    // 初始化theme，值来自本地缓存
    const [theme, setTheme] = useState(localStorage.theme);
    // 下一个要切换的主题
    const activeTheme = theme === 'dark' ? 'light' : 'dark';

    useEffect(() => {
        const root = window.document.documentElement;

        root.classList.remove(activeTheme);
        root.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme, activeTheme]);

// 这个 Hook 返回一个数组：
// activeTheme：下一个主题（用于切换按钮显示图标）
// setTheme：切换主题的函数（用于点击事件）
    return [activeTheme, setTheme];
};

export default UseThemeSwitcher;
