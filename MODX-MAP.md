# Карта переноса GitHub → MODX

## Шаблоны

| GitHub | MODX |
|---|---|
| `_layouts/default.html` | базовый HTML-каркас |
| `_layouts/home.html` | шаблон `Home` |
| `_layouts/region.html` | шаблон `Region` |
| `_layouts/service.html` | шаблон `Service` |
| `_layouts/simple.html` | шаблон `SimplePage` |

## Чанки

| GitHub | MODX |
|---|---|
| `_includes/header.html` | `Header` |
| `_includes/footer.html` | `Footer` |
| `_includes/project-form.html` | `ProjectForm` |

## Поля страницы

При переносе фронтматтер страниц переводим в поля ресурса/TV:

- `title` → SEO title / TV `seo_title`;
- `h1` → TV `h1`;
- `description` → `description`;
- `sections` → набор чанков и/или MIGX/TV в зависимости от типа блока.

## Правило

Повторяющаяся разметка хранится один раз в шаблоне или чанке. В самих ресурсах MODX остаются данные конкретной страницы: H1, SEO-мета, тексты, изображения, ссылки и набор нужных блоков.
