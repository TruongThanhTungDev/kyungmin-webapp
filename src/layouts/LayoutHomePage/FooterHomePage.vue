<template>
  <div>
    <div class="bg-[#dbdade]">
      <div class="footer-main py-6 flex gap-10">
        <div>
          <img src="@/assets/image/background/dbde1c34cf0a3.png" width="200" height="32" alt="">
        </div>
        <div class="flex gap-20">
          <a href="https://www.youtube.com/@KyungminUniv">
            <img src="@/assets/image/icon/youtube.png" width="15" alt="">
          </a>
          <a href="https://www.instagram.com/kyungmin_university/">
            <img src="@/assets/image/icon/instagram.png" width="20" alt="">
          </a>
          <a href="https://www.facebook.com/kmuipsi/">
            <img src="@/assets/image/icon/facebook.png" width="15" alt="">
          </a>
          <a href="https://www.facebook.com/kmuipsi/">
            <img src="@/assets/image/icon/blog.png" width="20" alt="">
          </a>
        </div>
      </div>
    </div>
    <div class="bg-primary">
      <div class="footer-main text-white py-10 flex">
        <div class="grid-footer">
          <div class="font-bold text-lg mb-6">
            대학소식
          </div>
          <div class="flex flex-col gap-4">
            <div>
              공지사항
            </div>
            <div>
              FAQ
            </div>
            <div>
              경민대학교 홈페이지
            </div>
            <div>
              찾아오시는 길
            </div>
          </div>
        </div>
        <div class="grid-footer">
          <div class="font-bold text-lg mb-6">
            모집요강
          </div>
          <div class="flex flex-col gap-4">
            <div>
              모집요강
            </div>
            <div>
              원서접수 바로가기
            </div>
            <div>
              경쟁률 현황
            </div>
            <div>
              전년도 입시결과
            </div>
            <div>
              입학상담 신청
            </div>
          </div>
        </div>
        <div class="grid-footer">
          <div class="font-bold text-lg mb-6">
            편입학
          </div>
          <div class="flex flex-col gap-4">
            <div>
              편입학
            </div>
            <div>
              학사학위 전공심화
            </div>
            <div>
              산업체위탁
            </div>
            <div>
              지원서 양식
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-[#dbdade]">
      <div class="footer-main py-10">
        <div class="grid grid-cols-4 gap-4 mb-10">
          <div class="col-span-3 text-[#474242] flex flex-col gap-1 text-sm">
            <div>
              대학입시 ・ 입찰공고 ・ 예결산공고 ・ 성희롱 사이버신고센터 ・ 발전기금 ・ 개인정보처리방침 ・ 이메일무단수집거부 ・
            </div>
            <div>
              양상정보기기운영관리방침 ・ 개인정보제공내역 ・ 정보공개
            </div>
          </div>
          <div class="flex justify-end">
            <img src="@/assets/image/logo/logo-primary.png" alt="" width="214">
          </div>
        </div>
        <div>
          <div class="flex gap-10 text-lg font-bold text-primary">
            <div>
              경민대학교 대표 전화 031-828-7700
            </div>
            <div>
              입시  031-828-7722
            </div>
          </div>
          <div class="text-[#474242] text-[13px]">
            (11618)경기도 의정부시 서부로 545
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterHomePage'
}
</script>

<style>
.footer-main {
  max-width: 1200px;
  margin: 0 auto;
}
.grid-footer {
  width: 16.66666667%;
}
</style>