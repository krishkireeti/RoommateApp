<template>
<div>
    <h1>Find Frequently asked questions here </h1>
  
<button class="accordion" @click="content1()">Is this site secure?</button>
<div class="panel" v-if="showContent1">
  <p>This entire site is served under SSL encryption. This prevents hijacking of any and all of your personal information.

If your browser displays the "http" sections of URLs, the https (as opposed to just http) at the beginning of each shows you your connection is secure. Also depending on your browser, there may be a "lock" icon next to that URL and/or in that browser tab. If so, you should be able to click on that for site verification as well.</p>
</div>

<button class="accordion" @click="content2()">Can i see the photos of other subscribers ?</button>
<div class="panel" v-if="showContent2">
  <p>None of our roommate profiles are ever published online.
Please see "Why don't you just publish everyone's personal info on the internet?" (above) for the why behind that.


You're not on a dating site.
This is a roommate service.
Totally different thing.
Please understand that.</p>
</div>

<button class="accordion" @click="content3()">If my profile was rejected, will you email me saying so?</button>
<div class="panel" v-if="showContent3">
  <p>No.

If we suspect you're a scammer, spammer, or scumbag, or even just someone who couldn't be bothered to answer the required questions, we're not going to spend time corresponding with you.
We're too busy helping our legitimate subscribers.</p>
</div>
        </div>
</template>

<script>
export default {
    data(){
        return{
        showContent1 : false,
        showContent2 : false,
        showContent3 : false
        };
    },
    methods : {
        content1 : function(){
            this.showContent1 = !this.showContent1;
        },
        content2 : function(){
            this.showContent2 = !this.showContent2;
        },
        content3 : function(){
            this.showContent3 = !this.showContent3;
        }
    }
    }
</script>

<style scoped>
.accordion {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 80%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
  transition: 0.4s;
}

.active, .accordion:hover {
  background-color: #ccc; 
}


.active:after {
  content: "\2212";
}


.panel {
  padding: 0 18px;
  background-color: white;
  overflow: hidden;
}
</style>