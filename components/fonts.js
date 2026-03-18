const Fonts = () => (
  <style jsx global>{`
    @font-face {
      font-family: 'LXGW WenKai';
      font-style: normal;
      font-weight: 300;
      font-display: swap;
      src: url('https://cdn.jsdelivr.net/gh/lxgw/LxgwWenKai@main/fonts/TTF/LXGWWenKai-Light.ttf')
        format('truetype');
    }

    @font-face {
      font-family: 'LXGW WenKai';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url('https://cdn.jsdelivr.net/gh/lxgw/LxgwWenKai@main/fonts/TTF/LXGWWenKai-Regular.ttf')
        format('truetype');
    }

    @font-face {
      font-family: 'LXGW WenKai';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url('https://cdn.jsdelivr.net/gh/lxgw/LxgwWenKai@main/fonts/TTF/LXGWWenKai-Bold.ttf')
        format('truetype');
    }

    body {
      font-family: 'LXGW WenKai', sans-serif;
    }
  `}</style>
)
export default Fonts
