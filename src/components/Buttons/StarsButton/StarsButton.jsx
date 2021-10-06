
import './StarsButton.styles.scss'

const StartsButton = () => {
return <div class="StarsButton-wrapper">
  <input class="StarsButton-input" id="rating-input-1-5" type="radio" name="rating-input-1" />
  <label class="StarsButton-star" for="rating-input-1-5"></label>
  <input class="StarsButton-input" id="rating-input-1-4" type="radio" name="rating-input-1" />
  <label class="StarsButton-star" for="rating-input-1-4"></label>
  <input class="StarsButton-input" id="rating-input-1-3" type="radio" name="rating-input-1" />
  <label class="StarsButton-star" for="rating-input-1-3"></label>
  <input class="StarsButton-input" id="rating-input-1-2" type="radio" name="rating-input-1" />
  <label class="StarsButton-star" for="rating-input-1-2"></label>
  <input class="StarsButton-input" id="rating-input-1-1" type="radio" name="rating-input-1" />
  <label class="StarsButton-star" for="rating-input-1-1"></label>
</div>
}

export default StartsButton;