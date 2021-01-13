<script>
    // export let kelas;
    // export let nominal;

    let big = [
        {klass:'', kelas:'Starter', nominal:'14.50'},
        {klass:'active', kelas:'Premium', nominal:'21.50'},
        {klass:'', kelas:'Advanced', nominal:'42.00'}
    ]
</script>

<style>

</style>

{#each big as bb}    
    <div class="col-lg-4 col-md-6 col-sm-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.4s">
        <div class="pricing-item {bb.klass}">
            <div class="pricing-header">
                <h3 class="pricing-title">{bb.kelas}</h3>
            </div>
            <div class="pricing-body">
                <div class="price-wrapper">
                    <span class="currency">$</span>
                    <span class="price">{bb.nominal}</span>
                    <span class="period">monthly</span>
                </div>
                <ul class="list">
                    <li class="active">60 GB space</li>
                    <li class="active">600 GB transfer</li>
                    <li class="active">Pro Design Panel</li>
                    <li>15-minute support</li>
                    <li>Unlimited Emails</li>
                    <li>24/7 Security</li>
                </ul>
            </div>
            <div class="pricing-footer">
                <a href=" " class="main-button">Purchase Now</a>
            </div>
        </div>
    </div>
{/each}
