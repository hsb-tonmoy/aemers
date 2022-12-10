<script>
  import ButtonPrimary from "./ButtonPrimary.svelte";
</script>

<svelte:head>
  <script
    type="text/javascript"
    src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
  ></script>
</svelte:head>

<div id="mc_embed_signup">
  <form
    action="https://aemers.us12.list-manage.com/subscribe/post?u=0f79dca96e159c656f4a22d20&amp;id=b103b531a8&amp;f_id=00ceb9e0f0"
    method="post"
    id="mc-embedded-subscribe-form"
    name="mc-embedded-subscribe-form"
    class="validate"
    target="_blank"
    novalidate
  >
    <div id="mc_embed_signup_scroll">
      <div class="mc-field-group">
        <input
          type="email"
          value=""
          name="EMAIL"
          class="form-input w-full rounded-xl px-4 py-2 border border-[#C7C7C7] focus:border-primary placeholder:text-sm"
          id="mce-EMAIL"
          placeholder="Enter your email address"
          required
        />
        <span id="mce-EMAIL-HELPERTEXT" class="helper_text" />
      </div>
      <div id="mce-responses" class="clear foot">
        <div class="response" id="mce-error-response" style="display:none" />
        <div class="response" id="mce-success-response" style="display:none" />
      </div>
      <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
      <div style="position: absolute; left: -5000px;" aria-hidden="true">
        <input
          type="text"
          name="b_0f79dca96e159c656f4a22d20_b103b531a8"
          tabindex="-1"
          value=""
        />
      </div>

      <div class="">
        <ButtonPrimary type="submit" classes="mt-2 w-full py-2 text-sm"
          >Subscribe</ButtonPrimary
        >
      </div>
    </div>
  </form>
</div>
