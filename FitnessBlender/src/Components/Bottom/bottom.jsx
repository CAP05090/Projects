import React from "react";
import { Membership } from "../MemberShip/membership";

export default function Bottom(){

    return (
        <div className="bottom">
            <div className="cont">
                <div className="logo">
                    <a href="/_">
                        <img className="imglogo" src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.crunchbase.com%2Fimage%2Fupload%2Fc_lpad%2Cf_auto%2Cq_auto%3Aeco%2Cdpr_1%2Fxrw4bb4pimqsu4pq6eij&tbnid=6KkWZlDb3JtzjM&vet=12ahUKEwjVzNvg_sKCAxV22jgGHbvVB1EQMygDegQIARBP..i&imgrefurl=https%3A%2F%2Fwww.crunchbase.com%2Forganization%2Ffitness-blender&docid=9fg_Aj-Yj0N7IM&w=200&h=200&q=fitnessblender%20logo&ved=2ahUKEwjVzNvg_sKCAxV22jgGHbvVB1EQMygDegQIARBP" alt="fitness logo"/>
                        <h1 style={{margin:"0px"}}>fitness</h1>
                        <h4 style={{margin:"0px"}}>BLENDER</h4>
                    </a>
                    <p style={{paddingTop:"5px", margin:"0px"}}>WORKOUT COMPLETE</p>
                </div>
                <div className="descr">
                    <div>
                        <h3>WORKOUTS</h3>
                        <p>WORKOUT VIDEOS</p>
                        <p>CUSTOM WORKOUTS</p>
                    </div>
                    <div>
                        <h3>PROGRAMS</h3>
                        <p>WORKOUT PROGRAMS</p>
                        <p>MEAL PLANS</p>
                        <p>PILOT PROGRAMS</p>
                        <p>ROUTINES</p>
                    </div>
                    <span><hr/></span>
                    <div>
                        <h3>HEALTHY LIVING</h3>
                        <p>FITNESS</p>
                        <p>HEALTH</p>
                        <p>NUTRITION</p>
                        <p>HEALTHY RECIPES</p>
                        <p>EXPERTS</p>
                    </div>
                    <span><hr/></span>
                    <div>
                        <h3>ABOUT</h3>
                        <p>CAREERS</p>
                        <p>TUTORIALS</p>
                        <p>OUR TEAM</p>
                        <p>B2B OPTIONS</p>
                    </div>
                    <span><hr/></span>
                    <div>
                        <h3>MEMBERSHIP</h3>
                        <h3>FB PLUS</h3>
                        <h3>COMMUNITY</h3>
                        <h3>BLOG</h3>
                        <h3>CONTACT US</h3>
                        <h3>FAQ</h3>
                        <h3>STORE</h3>
                    </div>
                </div>
            </div>
            <span><hr/></span>
            <div className="contact">
                <div className="social">
                    <a href="https://www.youtube.com/user/FitnessBlender" target="_blank" rel="noreferrer">
                        <img src="data:image/png;base64,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" alt="Youtube"/></a>
                    <a href="https://pinterest.com/FitnessBlender/" target="_blank" rel="noreferrer">
                        <img src="data:image/png;base64,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" alt="Pinterest"/></a>
                    <a href="https://www.facebook.com/pages/FitnessBlendercom/151085874942542" target="_blank" rel="noreferrer">
                        <img src="data:image/png;base64,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" alt="FaceBook"/></a>
                    <a href="https://instagram.com/fitnessblender/#" target="_blank" rel="noreferrer">
                        <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEBUQEBIVFhUVFRYWFhURFRUXFhUVFRUWFhcVFxYYHSggGBomHRUVIjEhJSkrLi4uFx8zODUtNygtLisBCgoKDg0OGxAQGy0lICUtLS0vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwEDBAUGAgj/xABMEAABAwEDBgYMCwcEAwAAAAABAAIDEQQFBgcSITFRcRMiQWGBkTJCUlNyc5KhsbLB0RQjJDNik6KzwtLhFRdDRFSC0xY0Y+Kjw/D/xAAbAQACAwEBAQAAAAAAAAAAAAAABQMEBgIBB//EAD4RAAEDAQMICAMHBAIDAAAAAAEAAgMEBREhEjFBUWFxkbEiMoGhwdHh8BU0UgYTFEKCsvFTcqLSIzNiksL/2gAMAwEAAhEDEQA/AJxREQhEXkmmkrgcUZQWxkxWOj3csp0sHgDtt+rerFNSy1DsmMX69Q3ldNaXG4LtrbbYoW580jWN2vIHVtXKXllGszNETXynbTMb1u0+ZRfbrwlmeXzSOe48ryTTmA1AcwWNVaKnsKFovlJceA8zvvCmEN2ddra8pNqcfi2RMG5z3dZIHmWsmxvb3fxqeC0D2LnqrzVMm0FM3NG3gDzvUgjGpbp+K7addpk6HEehWnYktZ/mZvrXe9alFKIoxmaOA8lK2Malsjf1r/qZvrZPevJvy1H+Zm+uk/MteqLrIbqHBTtibqHBbA35af6ib62T8yp+3LT/AFE31sn5lgKiMluoKdsTdQ4LP/blp/qJvrX/AJk/blq/qJvrn/mWAqIyG6hwUzYmfSOAWw/btq/qZvrn/mT9vWr+pm+uf+Za5URkN1DgFIIY/pHALaDEdsH81P8AWyfmVxuKrcNVql6ZHH0laZF591Gc7RwCkETPpHALfx41t7f5hx8LT7FtLNlKtjeyET/CYR52kLi0UbqOndnjb/6hBpYXC4sHBSrdmU+F2ieJzD3TaOb1EgrsbsviC0NrBK1/MDRw3tOkdIXzwrtntDmODmOc0jU5pII6QltRYdO8f8ZLTxHn3qnLZUTuock8R596+k0UW4VyikERWzjDVwo7Ib29uOcad6kuzztkYHxuDmuFQ5pqCDygrO1VHLTOukG46D71FJqimkgdc8dugq+iIqqroiIhCLyTTSV6UfZTMScG34HEeM8VkI5GHU3p015t6sUtM6olEbeOoa13GwvdkhajHWMjM51msziIgaOcNcp2D6HpXDqiVW3ggZAwMYMOe0pm2ENFwVUWxuO5JrXJwcLa6s5x0NYDyuPs1qT7jwDZYaOlHDP+n2A3M99VXqrQhpsHnHUM/bq9kKORzI8DnUT2SxSSnNije87GNLqb6alubPgq3v0iAjwyG+kqaoYmtGaxoaBqDQAB0BXUnkt556jAN5J8lWNSdA99yhsZPLce0jG+QexXhk2th7aEb3u9jCpeRQ/HKnU3h6rz8S/ZwUSDJla+WSDy5P8AGq/uxtXfIPLk/wAalpFz8bqdnBe/i5dnBRJ+7C1d8g8uT/Gq/uwtPfYfKk/IpaRefGqrZwXQrptY4BRL+7G1d9g8qT8ip+7C1d9g8qT8iltEfGqrZwC6+IT6xwCiX92Fq77B5Un5FT919q79D5T/APGpbRHxqq1jgF6LRn1jgFEZyX2rvkB/uf8A41Zfk0tg1GI7nn2tUxIvRbdTs4eq6Fpz7OChCfAFvb/CB8BzT7VprwuS0wfOwvaNrmuzfK1L6IVCpo7elHXYDuvHmO5TMteQdZoPEeY7l80FFOV9YMslpB4nBu7qKg087dRUW4nwpNY3cYVjJo2Rmo8xHIU4pLThqDkjB2o+GvnsTWmropzkjA6j4H2di59dVgzFr7G/g5CTC46W9zWnGb9Lm5Vyqqrk0TJWFjxeCrUsTZGljxeCvo+zWlsjGyRuDmuALXDUQeVZCifJhiQsf8DlPEeTwZPayGgDdx1b6bVLCxNbSOppSw5s4Ose8Fk6qmdTyFh7DrHvAoiIqirLDvK2Nhhkmf2MbS49A1bzqUA3hbHTSvmkNXPcXHpOrcNW4KUMq94ZllbCNcr9Pgs43rZqiVaexYQyEyaXch659yb0EPQy9fh6qtVs8P3PJa52ws0V0udSoa0a3H0DaStYpkycXNwFjEjh8ZNxztDCOI3q073K7XVf4eEvGfMN/p6FTVL/ALmPK06FvrmuqKyxNhhbQDWeVx5XOPKVsURYxzi4lzjeSkZJJvKIiLxeIiIhCIiIQiIiEIiIhCIiIQiIqEoQqrD/AGjDnZnDR53c8I2vVWqifGmMpLRI6KBxbC004pIL6a3Ejk2BcdnnaetPILFL2ZUjrjquvu35uCdwWM5zb5HXHVdfxzcF9KrGtllZKwxyNDmOFC1wqCodwjjCazSNjlLnwkgEOOdmjumk9jTZqKmeKQOAc01BFQdoKX1dG+leATgcxzfwR7vS+ro30zwDmOYj3gVB+NcNOsc1W1Mb9LHHzg84XNKfcXXQLVZXxdtTOZ4bRo69I6VAz2ZpLStLZlYaiLpdYYHwPbzC0Nm1RqIul1hgfA+9IVI3kODgaEaQRoII5VPuFr1Fqssc3KRmv5ntoHe/pUAKS8kN4GstmJ5BI0bg1rvw+SorZhElPl6W49hwPgo7Xgy4MvS3xwPgpNREWTWXUQZWLTnW1sfIyNgpzuLnE9Wb1Lil0OUCXOvKbmc1vUGrnlsKXowMGwd+K1lLFkwsGwd6yrpshmnjhHbuY3cHOoT0CpX0NFGGgNaKAAADYBoAUJ5O4M+8ovo5x8mvvU4JPbEl72N1C/ifRKbXNz2t2X8T6IiIk6UoiIhCIiIQiLS37iSz2QfHP41KhjKF56OQc5oo9vfKTaH1FnDYm90eM7yiKDqVqCimmF7RhrOH89iu01nzz4tFw1nAeZ7AVLT3AaSab1ivvOAa5ohvkb71Adsve0Smssz3eE556qnQsLOO09aYNsgfmfwHvkmrLB+qTgPXwX0Qy9IDobNEd0jfesmOQEVaQdxqvm6p2lZdkvOaI1jle07Q549BXrrIH5X8R6+CHWDh0ZOI9V9FIobujKHaoqCWkw+n2VPCGnrBUgXBjCzWoANdmPPaSFoJOxp1O3a+ZUJ6GaEXkXjWEsqbNqIBlEXjWMeOkLpFrcQuIsloI1iCUjm4jtK2StTRBzS1wqHAgg8oIoQqjTc4HUqLTc4FfNrtZ3lFvsV4eksk7mlpdGXVY6mhza1pXuhyhaFbdsrXjKbmK3zHtkaHtN4OZAp8wa9zrBAXa+DA6ASG+YBQ3hu4ZbXM2NjTm1Bc4jihnbEnbsHKp3slmbHG2Jgo1jQ0DmAoEmtmZuS2PTffuw8UhtyRoDY9Ofdh4rIUDY5sXA26Zo1OcXN3P00HMC4joU8qIsrcNLXG/uo2/Zc4KtY0mTOW6we64qrYz7qgt1g+a4RdLk9tXB3jCa6HktPPn1aPPQ9C5pbPDkuZa4XDklZ6WrRzDLjc06QRxC0k7MqJw1g8l9CoiLC3rB3qA8YmtvtJ/wCV/mJHsWnW2xVpt1oP/NL5nuC1S1UcnQbuHJb2KO6Nu4cguxyVMrbq7I3n0D2qYlEmSRvyx/NC8/aiHtUtpJaDsqbsCzFs4VN2wIiIqKVIiIhCKPMZY7EZdBZCC8aHSaCGnUQ2h0nnTKLisxg2SB3HI+MI1gEdgDt2qLSmtFRtI+8k7B4n3itJZVkh7RNMMNA8T4Dt1X3J5nPcXvcSSakuNSTzlWlVe44y4gNaSToAAqTuCb5a02QraLsbpye2uXjSARA92SHH+0Co6aLo7PkvhA+Mme4/RAA89VWfXwtwJ4YpfLaVHEbnPF+y88sFFaKV5cmEFOLM8eE1p9y0F65NrQwZ0LmyjuQaHySKFDa+Fxuvu34LyO1KOQ3B92+8d+biVw69McRpBortqsr4yWyNc0jW1wII6CrCtB+kJgBpCkLB2PHMLYLW4lp0NlOkt1aHHtm8+sKT4pA4BzSCCAQRpBB0ggr5uXf5PMWmNwss7qxk0a53aOcQAKntST/9pSutomkGSMY6R79+OetSyQWmWEY6QNO7bs0788nWyyRysLJWNe062vAI6itIcDXfWvwcbs+SnVnLpESqOaSPqOI3EhZyOeWP/rcRuJHJYlhsMULMyGNrGjkaKde0rLRFGTebyoySTeUUXZYWcaznaCOo/qpRUa5ZBosx+lL/AOtX7MN1S3t5FMbI+cZ+r9pUZK/Yn0lYdj2HqIVlVj1jeFqQbytmG3m5fR/CKqwPhKLFZK+eZKhPE/8AvbR46X7xy1q2eJB8sn8dL945a6ibRydAbgvocbegNw5LtskX+7k8Q714lLSifJJ/upPEO9eNSwl1Ub5Sd3JZK3Pm+wIiIq6TotLiq9xZbK+bRn0zYweV51aOWmvoW6US5Vbzz7Q2zg6Im1d4TtJ82apYGB7wDmTGyqT8VUtYcwxO4eZuHauJtEznuL3VJJJJOsk6SVbSi9xRlxDQKkkAAcpOoJ394voIas65LnltUoiibWvZO00ArpJPIFMWG8LQ2RoLQHSU40jgK7m9yEwhcLbJAGkDhHAGQ89OxrsHvXQpVUVLpDkg4c1iLVtV1Q4xxG5g/wAtu7UO04oiIqiSIiIhC1F9XFDamZkzBWlGvFA9m53s1KHcUYckscua7Sw9i8CgI9h5lPK1t93VHaoXQyDQdIPK1wrRw61apql0Ru0e8Qmtm2m+lcGuxYc41bR4jMd6+fUB5Vl3nYHwSvieKFpIOzeOZYidtkBxC3QuNxCmfJ7fnwizBjzWSKjXV1kU0H0joXWqDsA3rwFtYSeK/iHc8tA9APQpxSSriEcmGY4rC2xSCnqDk9V2I8Rx7iEREVVKkUb5Ym8Szn6Unn4P3KSFHWWH5uzn6b/Q1XKA3VDe3kUzsf51nb+0qLl6ZrG8Iqx6xvC0odituG4qaeGKosTPPdIszkBYT7pRxiQfLJ/HSfeFa6i2mIh8rtHjpPvHLXUXDZeiNwW7jHQG4LtMko+VyeId68aldRVkoHyuTxLvXjUqqF7sp16x1vfN/pCIiLlJl5caCpXz7fdpMtpklPbyPPWSablPF6upBKdkbz1MK+fXjXvKngcGkrWfZiMXSv8A7RzPkrVF1+TK7eFtgkcNEIL/AO6ozR1mv9q5OilDJLAOBmfyueB1Nr7VLJL0SE5tiUxUUjhnuu4m7kVICIipr50iIiEIiIhCIiIQoxys3WA6O0t5Rwbt40g76EjoCjlTRlKhDrukd3Dmu8+b+JQwEzpZOhcdC3lhSmSjbf8AlJbwxHcbkYdIPOF9DXTauFgilOt8bXHeQK+dfPKnLAclbugOxpb1OcPYua3pNadR5/wqn2kjvgY/U67iL/8A5XQoiJcscijvLCPioPCk9VqkRR7lf+Zg8J/qhWaM3Tt7eRTOxvnY+39pUWr1HrG8KiqzWN4T8OxW9DcVK2cUVVRIL1jcgLhMQj5ZaPHy/eFa6i2uIW/LLR46T7xywKJWJlrmdUbguwyUj5VJ4l3rxqUlF+SwfKpPEu9eNSgp43ZQvWNt/wCc/SEREUiSrDvZtbPKNsb/AFCvn9wX0TIyoIPKCOtQHeNmMc0kZFCx72noJHsXLn5K1v2YeMmVn9p5rBopQyTPrBM3ZI09bafhUZkLsMmFvDLU6I6pW0Hht0jrAPmXgkvwTe2YjLRSAaBfwIJ7lLKIi7XztEREIRERCEREQhcrlJkpd8g2lg+1nfhULBSdlavGjI7MDpPxjuYcZrfPnKM6K1A65q3v2fhMdECfzEnkPBUU34Ajpd0IPKHHre4+1Qk1ukbwvoC47PwdmhjOtsbAd9NK9qH3tAVb7TPAp2M1uv4D1WwREVRYtFH2V75mDw3fhUgqPsr3zMHhu/Cpqf8A7WppYvz0fb+0qLVVusbwqL1HrG9Og5fQg3FSqiqiTrFLjcRN+V2jx0nruWuzVtsQt+Vz+Ok9crX5qzbpbiVqIz0BuHJdXkwHyp/iXfeRqTVGmTMUtT/Eu+8jUlplSG+O/aVj7e+b/SEREVpJkUS5Rbt4K1GQDiyjPHhane/pUtLn8YXP8JsxDRV8fHZtJA0t6R56KKZpLcM6Z2RVimqQXdU9E9unsKhvNXuzTOje2Rho5pDgdhBqFcdHReS1LxLpX0C/QVNOH72ZaoGytpWgD2jtX00j3cxC2yhTDl+Pscmc3Sx1A9nIQPQRU0Klu6b0itEYkidUcoNM5p2OHIr8UwfhpWCtSzHUjy5ovYcx1bD4axtWwREUyUoiIhCLFt9sZDG6SQ0Y0VJ9g50t1tjhYZJHBrW6yfQNp5lEuMcUOtbuDZVsLTUA6ye6d7ByLkuATKzbNfWSamDOfAbT3ZytJft5vtU7pn6CToFagNGoDcFr6K4WryQpGyL6IxoaA1ouAwAW3wfdnwi2RsIq0Gr9ma01dXfo61Oy4nJtcXAw/CHjjyji11iPX5yAdwC7ZDnZSwlvVYnqchvVZh26fLsRERcpIij7K98zB4bvQ1SCo8yv/NweFJ6GKWE3PCa2GL6+Pt/aVF69N1jeF5XpmsbwmIevorRipXRZHADaiXZbVhcoLj8SM+VzeNf6xWuzVusTR0tc3jD59K1easdLJc9w2nmtHC6+Np2DkukycaLU7xLh9uM+xSSo1wDote9jx6D7FJSeWY7Kgv2nwWUtz5r9I8URETBJ0REQhRzjvDha82qEcVxrIB2rtPG8E+k864wsU6yRhwLXAEEUIIqCDyEKPsUYSdGTLZwXM1lgqXN3bW+hK6unLb3szaVqrJtYFogmOIwB17Dt1a9+ficxX7HapIXh8Tyxw5Wnk2HaOZenMXksVFsupaIkEEFdhdeUBwo20x1+lHoPSDo6qLfQ43sbhpc9vhMP4aqLyxeSxWmVsg2pXJYtHIb8kt/tN3MEcApTlxtY2js3O8FjvxALS3nlEABFmiqe6m1eS06esLhCxULVJ+LeURWHRMN9xdvPkArt7XtNaXZ0zy6moVo0V7luoLALVkFq8Fi9EqcsuaA1ouA0BWCF0uCcMG1S8I8EQsIJPdEacwe3m3q5hfCMlpcJH1ZEDpJFC/mZXXv1KVbFY2RRtiiaGsaKAD08551civOKR2tbAgaYoTe86fp9eW9XmtAFBoA0Be0RTrFIiIhCKOMsJ4tmH0pT1cH71I6jTLE7/bjZwh6yz3LthucE4sH5+P8AV+1yjheo+yG8LwrkGlzRtICtBy+jAYqb/gnMi2/Bolt6+YfflRxiuKlsl5yD1gLU5q6jHMFLQHd0xp6QSPYFzuYshW9Coe3/AMj34rUUcmVTsOwcls8HuzbYznzh1tKk1RPd83BzMk7lwPQDp8yleqdWJJlRObqPMeYKR223/ka/ZdwPqqoiJ0kiIiIQiIiELnL5wrDPV7Pi3ka29iTzt9oXHXjhe0xdpnDuo6uHVSo6lKiKnNQxSG8YHZ5JnS2rPAMk9Iaj4HPzChJ0a8FimaewRP8AnI2O5y0V61gPw1ZD/BA3Fw9BVE2bKOq4HiPNN2W/EeswjgfJRMWLyWKWW4Wsg/gg73OPpKzrPdkMemOJjTtDBXrXTbPl0uHeV077QQjqsceA8Soou3Dtpn7CIgd0/it6zr6KrtLkwPFFR9oPCvHa/wAMHdrd06OZdgivRUjGYnH3qSuptuomGSzojZn4+Vy8NaAKAUA5AvaIrSToiIhCIiIQiivK9J8fC3ZHXrcfcpUUJ5Rbbw1vkpqj+LH9lc77RcvMq4p/9m48qsyvpaTxw8VzCy7mizrRE3bIwdZCxaLe4Hs+feEAHI/O6Gcc+qu8vBbqoeGROedAJ4AqdM1FVFxcvkuK5nG1lzomSDtXUO536gLjM1Sfb7OJI3RnthTp1g9dFHEsJa4tOsE13g0KytuQ5EwkGZw7x6XLR2TPfEYznB7j63rHzFIOGrbwtnbXsmcU9Go9S4XNWwuW8DBJndqdDhtHvVSzKwU817uqcD4Hs5XqxXwffxXDOMR5dqkJFahla9oe01BFQVdW1BvxCyubBERF6hEREIRERCEREQhEREIRERCEREQhEREIREXhzgBU6ANZPIhCwb6vFtngfM7tWmg2uPYt6SoFtEhc5zialxJJ2kmp85XX49xJ8JeIYj8Uw6+7fp424ah0lcgQqj5gXYLfWFQmlgLni5zsTsGgeJ7ArVF3mSW786aS0EaGNzR4T6V8wPWuHDamimvBV1fBrGxpHGf8Y/e4Cg6AAOtSRnKK7t+qENGW6X4Ddp7sO1dCiIp18+Rcriq7dPDNGg6H8x1ArqlbkjDgWuFQRQg8oVWspW1MRjPYdR0eqnp5zC8PHsKNs1VzVuL3ukxOq3Sw6ubmWtzVgZ4nwPMcguI93jWDoWljmbI3KbmWbdN6PgNNbD2p9PMV1divGOUcR2nYdB/VcQGr00bFeorYmpRk9Zuo6Nx0cCqlTRxzHKzHX6eypDRcZBeszNTyRsdp9KzWYhfytaesJ9H9oKRw6V7ey/lfySx1nyjNcV0yLnxiI97HlU9i9DEf/EfK/RTC3KD+p/i//VR/gp/p7x5rfItH/qEd7Plfon+oW97PX+ik+MUP9Tud5Lz8HN9PePNbxFov9RN72ev9FQ4kb3s9f6I+MUX9QcHeSPwc/wBPLzW+Rc8cTN72ev8AReTitvej5Q9y9+L0X9Tud5Lr8DUfT3jzXRouZdi1vej5Q9ytnGI7yfL/AOqPi9H9fc7/AFXQs6pP5e8ea6pFyBxqOSD/AMn/AEVh+N3ckLel5PsR8WpPr/xd5KQWVVn8ve3zXbIuAlxxN2scf2j7Vp7bim1yaOFLRsj4vnGnzrw2pB+W89l3O5Tx2JUOPSIHbfyvUjXne8NnbnTSBuxvbHc3Wo4xVi59prFGCyL7T/CPIOZaKUkmriSTyk1PWrDgqsle6TDME/oLIhpnB56TtZzDcNe287LljuC8EK+4LY4euJ9qkDGCjBTPfTQ0e07ByoY4k3BOnzNjaXvNwGcrYYCw8bROJZB8VGQTXU547FnPtO4bVL6wrssEdnibDEKNaOknlcdpKzU4ijyGr5/ade6smyszRgBs1nac54aEREUiXIiIhCtyRhwLXCoOsFc3eNxFtXRaR3Oz3rqEVOsoIapt0gx0EZx6bDh2qaGd8JvbwXAZqqGrs7VYI5OybU7RoWqnuCnYOB5jo86ydTYNVGb47njZgeB8CU1ZXxuz4e9a0Yaqhqzn3XK3WzqofQrRs7hralElPNH12OG9pHMKcStOYjirAaq5qu5iAKqXjWvbyrWaqFqvZqFqMsa0ZSxy1W3NWSWK25q6DxrXbSsZzVZc1Zjmqy5qma8a1M0rEc1WXtWU4K08KVrxrU7SViParL2rLe1WjETqB6ArDHg5lYaSFhuCsvC2Qu+V3YxvO5pV6PDVqfqhd/dRvrEK9FFI7M08Cu/v429ZwG8haF4VpzaruLJgN50zSNA2M4x89AukuvDVms4qxmc4dvJRzujRQdATWGz5ndYZI2+X8KrNbdNF1TlHUPPNwvXCYfwbLOQ+WscXP2bh9FuznPnUlXbd8dnjEUTaNHWTtJ5SsxE6gp2xDDPr95lm660pqs9LBozAZvU7+y5ERFOl6IiIQiIiEIiIhCIiIQiIilYhW3LFeiKCbqlTsVoqhREmfnUwReVVFyvV5KIi9GdC9KkXKiK3HnXuhZMKymqiJkFXfnVxERenMq6IiLleoiIhCIiIQiIiEL//2Q==" alt="Instagram"/></a>
                    <a href="https://twitter.com/FitnessBlender" target="_blank" rel="noreferrer">
                        <img src="data:image/jpeg;base64,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" alt="Twitter"/></a>
                </div>
                <div className="policy">
                    <p>Copyright © 2023 Fitness Blender. All rights reserved.</p>
                    <a href="https://www.fitnessblender.com/page/terms-of-use-agreement" target="_blank" rel="noreferrer">Terms of Use</a>
                    <a href="https://www.fitnessblender.com/page/privacy-policy">Privacy Policy</a>
                </div>
            </div>
        </div>
    )
}