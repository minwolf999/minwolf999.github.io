export function SetAnimation()  {
    const anim = document.getElementById('style')
    const marquee = document.getElementById('marquee')

    anim.innerHTML = `
        @keyframes marquee {
            from { transform: translateX(${marquee.getBoundingClientRect().width}px); }
            to { transform: translateX(-100%); }
        }
    `
}