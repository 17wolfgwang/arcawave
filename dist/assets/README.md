# Assets Folder

이 폴더는 Arcawave 랜딩 페이지에서 사용하는 이미지 및 로고 파일을 저장하는 곳입니다.

## 폴더 구조

- `images/` - 갤러리 이미지, 히어로 섹션 이미지 등
- `logos/` - 로고 파일 (SVG, PNG 등)

## 권장 파일 형식

- **로고**: SVG (벡터) 또는 고해상도 PNG
- **이미지**: WebP, PNG, 또는 JPG (고해상도 권장)
- **최적화**: 웹 성능을 위해 이미지 최적화를 권장합니다

## 사용 예시

로고를 추가한 후 `index.html`에서 다음과 같이 사용할 수 있습니다:

```html
<img src="assets/logos/arcawave-logo.svg" alt="Arcawave Logo">
```

또는 CSS에서:

```css
background-image: url('assets/images/hero-image.jpg');
```

