<template>
<section id="about" class="about">
      <div class="container" data-aos="fade-up">

        <div class="row">
          <div class="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay="100">
            <div class="about-img">
              <img src="/goodviews.jpg" alt="">
            </div>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
            <h3>The Good views</h3>
            <p class="fst-italic">
              Location
            </p>
            <p>
              11/9 ถนน รัตนโกสินทร์ ตำบลช้างเผือก อำเภอเมืองเชียงใหม่ เชียงใหม่ 50200
            </p>
            <p>
              13 ถนน เจริญราษฎร์ ตำบล ช้างม่อย อำเภอเมืองเชียงใหม่ เชียงใหม่ 50000
            </p>
          </div>
        </div>

      </div>
    </section>

<section id="book-a-table" class="book-a-table">
    <div class="container" data-aos="fade-up">

      <div class="section-header">
        <h2>Book A Table</h2>
      </div>
      <div class="row g-0">
        <div class="col-lg-4 reservation-img" style="background-image: url(beer.jpg);"  ></div>
        <div class="col-lg-8 d-flex align-items-center reservation-form-bg" >
          <form>
            <div class="row gy-4">
              <div class="col-lg-4 col-md-6">
                <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" required>
                <div class="validate"></div>
              </div>
              <div class="col-lg-4 col-md-6">
                <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email">
                <div class="validate"></div>
              </div>
              <div class="col-lg-4 col-md-6">
                <input type="text" class="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars" required>
                <div class="validate"></div>
              </div>
              <div class="col-lg-4 col-md-6">
                <input type="text" name="date" class="form-control" id="date" placeholder="Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars">
                <div class="validate"></div>
              </div>
              <div class="col-lg-4 col-md-6">
                <input type="text" class="form-control" name="time" id="time" placeholder="Time" data-rule="minlen:4" data-msg="Please enter at least 4 chars">
                <div class="validate"></div>
              </div>
              <div class="col-lg-4 col-md-6">
                <input type="number" class="form-control" name="people" id="people" placeholder="# of people" data-rule="minlen:1" data-msg="Please enter at least 1 chars">
                <div class="validate"></div>
              </div>
            </div>
            <div class="form-group mt-3">
              <textarea class="form-control" name="message" rows="5" placeholder="Message"></textarea>
              <div class="validate"></div>
            </div>
            <div class="text-center"><button type="submit">Book a Table</button></div>
          </form>
        </div><!-- End Reservation Form -->

      </div>

    </div>
  </section>
</template>

<style>
h1 {
    margin-top: 120px;
}

</style>