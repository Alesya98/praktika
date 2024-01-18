const element = document.querySelector(".select");
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: "",
  shouldSort: false,
  position: "bottom",
});

document.addEventListener("DOMContentLoaded", function () {
  let acc = new Accordion(".accordion-list", {
    duration: 700,
    elementClass: "accordion-item",
    triggerClass: "accordion-top",
    panelClass: "accordion-bottom",
    showMultiple: false,
    collapsible: true,
    active: false,
  });
});

document.querySelectorAll(".btn-guests").forEach(function (tabsBtn) {
  tabsBtn.addEventListener("click", function (e) {
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll(".btn-guests").forEach(function (btn) {
      btn.classList.remove("btn-guests--active");
    });
    e.currentTarget.classList.add("btn-guests--active");

    document.querySelectorAll(".guests__cart").forEach(function (tabsBtn) {
      tabsBtn.classList.remove("guests__cart--active");
    });

    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("guests__cart--active");
  });
});

let swiper = new Swiper(".swiper", {
  slidesPerView: 4,
  slidesPerGroup: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".sw1-next",
    prevEl: ".sw1-prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 11,
    },
    321: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 30,
    },
    1025: {
      slidesPerView: 4,
      slidesPerGroup: 1,
      spaceBetween: 30,
    },
  },

  a11y: {
    prevSlideMessage: "Предыдущий",
    nextSlideMessage: "Следующий",
  },
});

document.querySelector(".burger").addEventListener("click", function () {
  document.querySelector(".burger-login").classList.add("active");
});
document.querySelector(".burger-close").addEventListener("click", function () {
  document.querySelector(".burger-login").classList.remove("active");
});

const podcasts__btn = document.querySelector(".podcasts__btn");
const padcastsLenght = document.querySelectorAll(".podcasts__item").lenght;
let items = 8;

podcasts__btn.addEventListener("click", () => {
  items += 2;
  const array = Array.from(document.querySelector(".podcasts__list").children);
  const visItems = array.slice(0, items);

  visItems.forEach((el) => el.classList.add("is-visible"));
});

document
  .querySelector(".header__button")
  .addEventListener("click", function () {
    document.querySelector(".header__nav-form").classList.add("header__nav-form__active");
    this.classList.add("active");
    document.querySelector(".header__nav").classList.add("active");
    document.querySelector(".header__container-top").classList.add("active");
  });
document.querySelector(".form-close").addEventListener("click", function () {
  let form = document.querySelector(".header__nav-form");
  form.classList.remove("header__nav-form__active");
  form.querySelector("input").value = "";
  document.querySelector(".header__button").classList.remove("active");
  document.querySelector(".header__nav").classList.remove("active");
  document.querySelector(".header__container-top").classList.remove("active");
});

const validation = new JustValidate("#form", {
  errorLabelCssClass: "is-label-invalid",
  errorLabelStyle: {
    color: "#D52B1E",
  },
});

validation
  .addField("#name", [
    {
      rule: "required",
      errorMessage: "Ошибка",
    },
    {
      rule: "minLength",
      value: 3,
      errorMessage: "Не короче 3 символов",
    },
    {
      rule: "maxLength",
      value: 30,
      errorMessage: "Слишком длинное имя",
    },
  ])

  .addField("#email", [
    {
      rule: "required",
      errorMessage: "Ошибка",
    },
    {
      rule: "email",
      errorMessage: "Email не корректный!",
    },
  ]);

validation.onSuccess(function () {
  document.getElementById("form").submit();
});

document.querySelector(".menu-burger").addEventListener("click", function () {
  document.querySelector(".header__nav").classList.add("actives"),
    document.querySelector(".header__nav-bottom").classList.add("actives");
});
document
  .querySelector(".menu-burgerclose")
  .addEventListener("click", function () {
    document.querySelector(".header__nav").classList.remove("actives"),
      document.querySelector(".header__nav-bottom").classList.remove("actives");
  });

// document.addEventListener("click", function (e) {
//   let m = document.getElementById("menu");
//   if (e.target.id != "test" && e.target.id != "menu") {
//     m.style.display = "none";
//   }

//   else if (e.target.id == "test") {
//     m.style.display = m.style.display != "flex" ? "flex" : "none";
//   }

// });


document.querySelector(".header__bottom-search").addEventListener("click", function () {
	document.querySelector(".btn-block").classList.add("open"),
	document.querySelector(".header__bottom").classList.add("open");
});
  document.querySelector(".btn-block").addEventListener("click", function() {
	document.querySelector(".btn-block").classList.remove("open");
	document.querySelector(".header__bottom").classList.remove("open");
  });

let playlists = new Swiper(".swiper-playlists", {
	slidesPerView: 'auto',
	slidesPerGroup: 1,
	spaceBetween: 18,
  

	a11y: {
		prevSlideMessage: 'Предыдущий',
		nextSlideMessage: 'Следующий',
	}

});
