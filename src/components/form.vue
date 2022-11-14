<template>
  <h2><a href="#">Sign Up</a> and find the best place to rest while traveling</h2>
  <form class="form">
    <div class="form-group">
      <div class="form-control form-control__fname" v-placeholder ph="First Name" svg="../assets/icons/user.svg">
        <input type="text">
      </div>
      <div class="form-control form-control__sname" v-placeholder ph="Second Name">
        <input type="text" class="form-group__name">
      </div>
    </div>
    <div class="form-group">
      <div class="form-control form-control__select custom-select"
           ref="countrySelect"
           @click="onSelectOpen"
      >
        <div class="form-control__select-display"
             @click="onSelectOpen"
             :style="openCountryList ? {'border-color' : '#6CEEC7'} : {'border-color' : '#FFFFFF'}"
             ref="selectedCountry"></div>
        <div class="form-control__select-list" v-if="openCountryList">
          <ul>
            <li
                v-for="country in countries"
                :key="country.dial_code"
                :value="country.name"
                @click.stop="onSelectCountry(country.name)"
            >{{ country.name }}</li>
          </ul>
        </div>
      </div>
      <div class="form-control form-control__phone" v-placeholder ph="Phone">
        <input type="number" class="form-group__name" v-model="phoneNumber">
      </div>
    </div>
    <div class="form-group">
      <div class="form-control form-control__password" v-placeholder ph="Password">
        <input type="password" class="form-group__name">
      </div>
      <div class="form-control form-control__confirmPassword" v-placeholder ph="Confirm password">
        <input type="password" class="form-group__name ">
      </div>
    </div>
    <div class="form-group">
      <div class="form-control form-control__email" v-placeholder ph="Email">
        <input type="email" class="form-group__name " placeholder="Email">
      </div>
      <div class="form-control form-control__checkbox">
        <input type="checkbox" name="agreement" id="agreement">
        <label for="agreement">
          I agree to the &nbsp;
          <a href="#">Terms & Conditions</a>
        </label>
      </div>
    </div>
    <button type="button" class="btn">Sign Up</button>
  </form>
  <p class="form__footer">If you have an account, <a href="#">Log In</a></p>
</template>

<script>
import countryCode from '../assets/data/phoneMasks'

export default {
  name: "app-form",
  data() {
    return {
      countries: countryCode,
      openCountryList: false,
      phoneNumber: null
    }
  },
  methods: {
    onSelectOpen() {
      this.openCountryList = true
      this.$refs.countrySelect.classList.add('full')
    },
    onSelectCountry(countryName){
      this.countries.forEach( country => {
        if(countryName === country.name){
          this.phoneNumber = +country.dial_code
        }
      })

      this.$refs.selectedCountry.innerText = countryName
      this.openCountryList = false
    },
  }
}
</script>

<style scoped lang="scss">
h2 {
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  text-align: center;

  a{
   border: none;
  }
}

.form-group {
  display: flex;
}

select {
  max-width: 300px;
}

.form-control {
  width: 300px;
  margin: 15px;

  select:after {
    content: 'Country';
  }
}

.form-control.form-control__fname:before {
  content: url("../assets/icons/user.svg");
}

.form-control.form-control__sname:before {
  content: url("../assets/icons/users.svg");
}

.form-control.form-control__select:before {
  content: url("../assets/icons/marker.svg");
}

.form-control.form-control__phone:before {
  content: url("../assets/icons/phone.svg");
}

.form-control.form-control__password:before {
  content: url("../assets/icons/password.svg");
}

.form-control.form-control__confirmPassword:before {
  content: url("../assets/icons/passwords.svg");
}

.form-control.form-control__email:before {
  content: url("../assets/icons/email.svg");
}

.form-control__select.full {

}
.form-control__select{
  flex-direction: column;
}

.form-control.form-control__select:after {
  content: 'Country';
}

.form-control__select-display {
  position: relative;
  border-radius: 5px;
  padding: 21px 0 13px 50px;
  font-weight: 300;
  font-size: 19px;
  line-height: 23px;
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid #FFFFFF;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
  color: #FFFFFF;
  height: 23px;
}

.form-control__select-list {
  position: absolute;
  top: 60px;
  background-color: #fff;
  max-height: 160px;
  overflow: auto;
  z-index: 10;

  border: 1px solid #FFFFFF;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
  border-radius: 5px;

  font-weight: 300;
  font-size: 15px;
  line-height: 18px;
  color: #5E5E5E;
  padding: 14px 0 14px 23px;


  li{
    list-style: none;
    color: #5E5E5E;
    margin-left: 0;
    transition: all 0.1s linear;
  }

  li:not(:last-child) {
    padding: 7px 0;
  }

  li:hover{
    margin-left: 9px;
    color: #212121;
  }
}

.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #6CEEC7;
  border-radius: 5px;
  background: transparent;
  font-weight: 500;
  font-size: 19px;
  line-height: 23px;
  color: #6CEEC7;
  width: 165px;
  height: 56px;
  margin: 15px;

  &:hover {
    background-color: #6CEEC7;
    color: #000000;
    cursor: pointer;
  }
}

.form__footer {
  font-weight: 300;
  font-size: 15px;
  line-height: 18px;
  margin-top: 120px;
}


</style>
