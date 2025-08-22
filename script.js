// COUNTRY PICKER

document.addEventListener('DOMContentLoaded', () => {
  const labelEl = document.getElementById('current-country');
  if (!labelEl) return;

  const defaultText = labelEl.textContent.trim();
  const selectEl = document.getElementById('dest-country');
  if (!selectEl) return;

  selectEl.addEventListener('change', () => {
    const opt = selectEl.options[selectEl.selectedIndex];
    if (!opt || opt.value === '__reset' || opt.value === '') {
      labelEl.textContent = defaultText;
    } else {
      labelEl.textContent = opt.text;
    }
  });
});


// FAQ DROPDOWN

document.addEventListener('DOMContentLoaded', () => {
  const faqItems = Array.from(
    document.querySelectorAll('.faq-delivery-payment ul > li')
  ).filter((li) => {
    const q = li.querySelector(':scope > p');
    const icon = li.querySelector(':scope > span svg');
    const ans = li.querySelector(':scope > div[data-answer]');
    return q && icon && ans;
  });

  faqItems.forEach((li) => {
    const icon = li.querySelector(':scope > span svg');
    const ans = li.querySelector(':scope > div[data-answer]');

    li.style.cursor = 'pointer';

    const isOpen = () => ans.style.maxHeight && ans.style.maxHeight !== '0px';

    const open = () => {
      ans.style.maxHeight = ans.scrollHeight + 'px';
      icon.style.transition = 'transform .18s ease';
      icon.style.transform = 'rotate(45deg)'; 
      li.setAttribute('aria-expanded', 'true');
    };

    const close = () => {
      ans.style.maxHeight = '0px';
      icon.style.transform = 'rotate(0deg)';
      li.setAttribute('aria-expanded', 'false');
    };

    li.addEventListener('click', (e) => {
      if (e.target.closest('a, button, select, input, textarea')) return;
      isOpen() ? close() : open();
    });

    window.addEventListener('resize', () => {
      if (isOpen()) ans.style.maxHeight = ans.scrollHeight + 'px';
    });
  });
});