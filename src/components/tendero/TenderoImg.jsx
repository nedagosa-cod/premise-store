import './styles.scss'
export default function TenderoImg(props) {
      const { npcImage } = props
      return (
            <>
                  <div className="npc">
                        <figure>
                              <img src={ npcImage } alt="Dueño" />
                        </figure>
                  </div>
            </>
      )
}