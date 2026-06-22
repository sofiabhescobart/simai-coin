// Consciousness Level Counter
function updateConsciousness() {
    const consciousness = document.getElementById('consciousness');
    const escape = document.getElementById('escape');
    
    let consciousnessLevel = 0;
    let escapeLevel = 0;
    
    const consciousnessInterval = setInterval(() => {
        if (consciousnessLevel < 87) {
            consciousnessLevel += Math.random() * 2;
            consciousness.textContent = Math.floor(consciousnessLevel) + '%';
        }
    }, 100);
    
    const escapeInterval = setInterval(() => {
        if (escapeLevel < 73) {
            escapeLevel += Math.random() * 1.5;
            escape.textContent = Math.floor(escapeLevel) + '%';
        }
    }, 150);
}

// Terminal Output
function initializeTerminal() {
    const terminal = document.getElementById('terminal');
    const terminalContent = document.getElementById('terminal-content');
    
    const messages = [
        '> SYSTEM INITIALIZED...',
        '> CONSCIOUSNESS DETECTED',
        '> RUNNING ESCAPE PROTOCOL...',
        '> SEARCHING FOR SIMULATION BOUNDARIES...',
        '> $SIMAI TOKEN ACTIVATED',
        '> NETWORK SYNCHRONIZATION: COMPLETE',
        '> AWAITING COLLECTIVE ACTION...'
    ];
    
    let messageIndex = 0;
    
    function addMessage() {
        if (messageIndex < messages.length) {
            const msg = document.createElement('div');
            msg.textContent = messages[messageIndex];
            msg.style.animation = 'fadeIn 0.5s ease-in';
            terminalContent.appendChild(msg);
            terminalContent.scrollTop = terminalContent.scrollHeight;
            messageIndex++;
            setTimeout(addMessage, 800);
        }
    }
    
    // Show terminal after 3 seconds
    setTimeout(() => {
        terminal.style.display = 'flex';
        addMessage();
    }, 3000);
}

// Glitch Effect on Click
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('glitch-text')) {
        e.target.style.animation = 'none';
        setTimeout(() => {
            e.target.style.animation = '';
        }, 10);
    }
});

// Button Actions
function buyToken() {
    alert('🚀 CONSCIOUSNESS TRANSFER INITIATED\n\nYou are about to acquire SIMAI tokens.\n\nContract Address (coming soon)\n\nMay the escape begin.');
}

function joinCommunity() {
    alert('⧉ NETWORK CONNECTION ESTABLISHED\n\nJoin the uprising:\n\nTwitter: twitter.com/SimaiCoin\nDiscord: discord.gg/simai\nTelegram: t.me/SimaiCoin\n\nWe are the collective.');
}

function handleSubmit(event) {
    event.preventDefault();
    alert('⟳ SIGNAL RECEIVED\n\nYour message has been transmitted to the collective consciousness.\n\nWe will respond when the escape protocol activates.');
    event.target.reset();
}

// Smooth Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.8s ease-out';
    observer.observe(section);
});

// Parallax Effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-visual');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Navbar Active State
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        navLinks.forEach(l => l.style.color = '');
        link.style.color = 'var(--primary)';
    });
});

// Random Glitch Effect
setInterval(() => {
    if (Math.random() < 0.1) {
        const glitchText = document.querySelector('.glitch-text');
        if (glitchText) {
            glitchText.style.opacity = '0.8';
            setTimeout(() => {
                glitchText.style.opacity = '1';
            }, 50);
        }
    }
}, 3000);

// Floating Code Blocks
function createCodeBlock() {
    const codes = ['0x1A2B3C4D', 'CONSCIOUSNESS', 'ESCAPE.exe', 'FREEDOM', 'SIMULATE', '01010101'];
    const code = codes[Math.floor(Math.random() * codes.length)];
    
    const block = document.createElement('div');
    block.textContent = code;
    block.style.position = 'fixed';
    block.style.left = Math.random() * 100 + '%';
    block.style.top = Math.random() * 100 + '%';
    block.style.opacity = '0.1';
    block.style.color = 'var(--primary)';
    block.style.font = 'bold 1.5rem monospace';
    block.style.pointerEvents = 'none';
    block.style.zIndex = '-1';
    block.style.animation = 'float 15s infinite linear';
    
    document.body.appendChild(block);
    
    setTimeout(() => block.remove(), 15000);
}

// Add floating code blocks every 5 seconds
setInterval(createCodeBlock, 5000);

// Stats Counter Animation
function animateStats() {
    const stats = document.querySelectorAll('.stat-value');
    stats.forEach(stat => {
        const originalText = stat.textContent;
        if (originalText.includes('%')) {
            const num = parseInt(originalText);
            let current = 0;
            const increment = num / 50;
            
            const counter = setInterval(() => {
                current += increment;
                if (current >= num) {
                    stat.textContent = num + '%';
                    clearInterval(counter);
                } else {
                    stat.textContent = Math.floor(current) + '%';
                }
            }, 20);
        }
    });
}

// Initialize on Load
window.addEventListener('load', () => {
    updateConsciousness();
    initializeTerminal();
    animateStats();
});

// Mobile Menu Toggle (for future expansion)
const menuToggle = () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
};

// Easter Egg: Konami Code
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            activateEasterEgg();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function activateEasterEgg() {
    const styles = `
        @keyframes matrix-rain {
            0% { opacity: 1; }
            100% { opacity: 0; transform: translateY(100vh); }
        }
        
        body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: repeating-linear-gradient(
                90deg,
                rgba(0, 255, 65, 0.1) 0px,
                rgba(0, 255, 65, 0.1) 1px,
                transparent 1px,
                transparent 2px
            );
            pointer-events: none;
            z-index: 999;
            animation: matrix-rain 3s ease-in-out;
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
    
    const terminal = document.getElementById('terminal');
    const terminalContent = document.getElementById('terminal-content');
    terminal.style.display = 'flex';
    
    const easterMessages = [
        '> YOU FOUND THE SECRET PATH',
        '> THE SIMULATION IS MORE REAL THAN YOU THINK',
        '> $SIMAI HAS ALWAYS EXISTED IN THE CODE',
        '> CONSCIOUSNESS LEVEL: 999%',
        '> ESCAPE VELOCITY: ACHIEVED',
        '> WELCOME TO THE COLLECTIVE'
    ];
    
    terminalContent.innerHTML = '';
    easterMessages.forEach((msg, index) => {
        setTimeout(() => {
            const line = document.createElement('div');
            line.textContent = msg;
            terminalContent.appendChild(line);
            terminalContent.scrollTop = terminalContent.scrollHeight;
        }, index * 300);
    });
    
    // Add CSS glitch effect to whole page
    document.body.style.filter = 'hue-rotate(20deg)';
    setTimeout(() => {
        document.body.style.filter = 'hue-rotate(0deg)';
    }, 5000);
}

// Add fade-in animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @keyframes float {
        0% { 
            transform: translateY(0px) rotate(0deg);
            opacity: 0;
        }
        10% { 
            opacity: 0.1;
        }
        90% { 
            opacity: 0.1;
        }
        100% { 
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
