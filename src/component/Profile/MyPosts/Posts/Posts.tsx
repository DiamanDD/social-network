import React from "react";
import s from "./Posts.module.css"


type PostsProps = {
    message: string
    likes: number

}

export const Posts = (props: PostsProps): JSX.Element => {
    const {message, likes} = props

    return (

        <div className={s.post}>
            <img alt={"ava"}
                src={"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSExMVFRUVGBUVFxcVFxUXFxUVFRUXFxUWFRUYHSggGBolGxUXITIhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGi0lICUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAMEBgcCAQj/xABEEAABAwIDBgMEBwUHAwUAAAABAAIDBBEFITEGEkFRYXEigZETMqGxB0JSwdHh8BQjYnKCFTM0Q5Ky8VNjwhYkc5Oz/8QAGgEAAwEBAQEAAAAAAAAAAAAAAgMEAQUABv/EADURAAIBAgQDBgUDAwUAAAAAAAABAgMRBBIhMUGx8BNRYXGBkSIywdHhM6HxBSRSFBVDkqL/2gAMAwEAAhEDEQA/ANVqKe6D1lGrK9qizwXXGTsV3uUqqpVBfCrdU0SGVFCnKoakAgxONYpb6ay8Ea1yuMSGWtTrWp+CmLjYf8d0fw3BA7Mi45m4HkNT8EGsnZB3UVdgBjCeCkxUEjtGm3Ph6q5MpIoxchoA4kAfFDa7FYhyLewDf9TsvgvTp5fmZlOs5u0F6lfFDzc0dMz6boI+Kc/srje3cAfMpx+08LdAwdWht/Ugj4IfV7WMOj5B/K/d/wBgCVeC7/b7lKhVfD90Tf7I4l4HYOPyCYkw9o/zW+bXj/xQ47SNP+dL/wDbIf8AyTjNpAcvbSHvI79HzuvKUfH2/Izsalv4/I6/DH2uN1w6Ob8ibqHUUErdWO9L/JEBi7TaxY7nvtAPk+OzvVTqSrYcrujJ5EPb5jI/NMi1fr8cxUo1FuioStUSViuuI0Di0uLWyt+029wPLMHuq3LRh19w/wBLrX8naH4J8WTt3AkjEwQp88RBsRY9VFkYqoyuhckNL1IheJoAkiEgktMOXBcEJ0rghaeGyEl0QuSvHjlJdJLx4+gXBNuYnrLyy4bF3Ir4VEmpUVsuTGgbGKpYrs9Coow1x0BVndBy1XcVEL3JumU4Sm7IZ20UD8OwoDXQfE9ei5xzaGKnbYEFw4cG9+vRSsYxFkLDd1jZYvjmJe0ebHK6KVXs/hhvxf0QyjR7Z557cEF8a2vlkPhJHX8OSrVRWvcblxJ6lctcm3JUYd50HaOiGnynmmXSHmnJGplwVEYiZSZw955pkyuHFduaU288wnqKFOTO2YnI3RxRCk2pkbrmgjrFR5Go+zizO1kjTcD243SM7K7QS0tY36rZDxGVz1svngSkIrheOSREFris7OxknCpvo+9bmtYzg72ZOFxwPP8Aldz6ZX5Ks1NOW9v1kRwKs2yG3DJgIprG+Wf5opjeBNLd9guw6lvvN5EjRwHqEW2q667xEs0HaXo+D/JnTmJohFq7DnRnm3mNPPkoDmJsZGNDCS7c1NlHcE8KS9K8RmHJC5ITll4QvHjiyS9skvHj6CXi9SXEaEnK9ASK6uALn9BFSp55We3E8cOIGZ0Hx/JVjaHa5kQIZmVB2t2lsCxmQ4rM6+sLiSSlVcQ5PLDRczp4bBK2ep7fckY3j0kziXONuSEe2BUCsnRI0FqT2ouX71z0bpb5HzXoU7K5ZKW9uA02Tguy9D/a8RqFKgnDgqErCr3Hr34pmUWXksfJMftLhkUa8BbPHP5FNGbmF7I5juhUSTeb1CbEU9B14aUxI0jqmzKDrklvkaG6agGNvTW9ZSCb6iybc1MTFtEmiq3NIINlq2w22pFo5TcaZrHQVOoastIIQShxQyE1bLLVM37GsNDm+2hzacyOGfTlzCplRSg3LRYjVvLsimwW04IEbzkdLqTtRhnsniWP3XZ9iPuSU7ASjklle3B9dxUZGJlwRWpiDhvDzHIoc9qoiwWhgheLty5KagTwL2y8Xq0w8skukl48b6kkkuMxIkHx+s3Y3G9hb4ak+eQCKOzs3nr2Gv4eaz3b3FbR7oPvud/pabD9dUNRuNJ+P0KMNDNNFJxmvL3koFWVFgU9USKvYtUEndH/ACTkPvQUaV3Y61WplRIpozLIRwAt5kXPw+avUMLXNdHluysu3vu5gfAoBs7CDKxg0Dd7uS3O/m8+isFHDbehvZ0RBYehzYe2oVTXAGPy2fG/5KK4lriw3u0kZ9MkyZC03GSsm1WGl5ErRunRw+y/iD0ORB/FVV5v4XAhw4HIokuJNmfqFIa7LNdyuBHNAW1BjdmLjqitPB7UF0JFhqCbFvfp10W5bahqWbYYni5KIZ3N/NSp45GO3Xtc08iLX7c/JexsLst2/wCuaJTsAqblsRRO12uS9LbcVMOGX1IZ2BcfQZfFPwYQwZn2p77sbfU/ijjNMZ/o6u7jbzaXMGFy8R1tJT/Yj/qqOPkU7/ZUbsxED/LLf70ebwBeHf8AnH/sv4/crdkmlHzhcOjmzNPMWcB3yXrtm2v/ALiYONvdeLH1H4Is6BnhKqV0rrwdyNg9eWOBBW17N4g2rg9m4+IC4PI8CsIqaKSE2kaW8uR7EZK67DY2Y3tN9Duu7HQ/d6IZpPVC4/HF03vw8yx1lMYnHLwklrh9k8vvCF1UViQrxtFTBzRM3NkgAeB8HDqFVMUpi2188hmOPI+llkXbcSpXQEkC4UmRqjuCfEFo5XoXi9CMwSS9SXjxvySS8XI30EDFQ6zJHcbEDy/MrGtsZ96aw0YN34n9eS17GZNyme7k2/ndY3WUEs87mRMLyNbaAc3E5NHUlKxf6sYLgvqzo4K1pSKvVlN7FYS6pq98tuyLxHkSMmj71cWbMwtyllMr/wDp09jbvK4bo8g5TKdwpYnexbFBH7znOJe7Li4uJHoB2TacsunEv7CTeeWi310/bf8Ab1K9hNN7Ktcx2VmvHT3gR8CjGJ1MIcHiRgkbce8PE3i0/rVVHEsfdNdzfbPbpvm0bHdsiUm7NVzwHRRxkEAi4ldr1OR72TMrsswrNSjFfE3buX3a5FnnxOne3N7QSLEOvZzeLXW+fBVvE6OGYWEgvpHJ9Zv/AG5QM7cnf8IJX4fXxO3XxAW4CNh+AF/VQf214eGzM3bi4IG70BtoRcJipvdNPyYnt8NOSi80b99rff1+7vzWxPjduStseHEEc2kZEJuiqHxPD2OII0I+/mOisWHkSkQS2LXaF1/Cf5hmPQ9lCxnAo4ZAI5vaD6ws4bv9RAv6BEpqwyWGq06iVr+K+v1LRTY+JIQBEGk33muAdDa3vgO93ysO6BvxG7hFBEZXngAQ0dmtzI63AQzEpHlojY0+LxOIB8VvdaOYFr5IhhOL/sDAzcHtJxvPfa0jGHINbfS+d9EEKC1k1fwDxGOcH2VF24OWzbXKK7loPOoJ5LtNRGx3GOHdIafsvcw5nha50XLdi53G92u6lzr/ABBVlwGemnB3f3haLkOZbdA1JLsgPNKoxbDGDxOhvkPA1j+5O5dHmktEiWSjvJ6999/cEUGGz0uW7G7etbe9ncHmCHbx7WViqMKxNzd5kUNrZFpeSRbLdBFr90xh2K0b7infECfqgBjj2BAJ8kUNZIAG77rDhc29EWd8RUsNCo8ytzKa/EpbiGeAl4yuTuSAjiOR7KDhNU4uJJzadeNv0FeMRo2VMTo5Ggusd19vE13O+pHRZ/TUxikcw8NfIr2f3KMDF0q6S2fs/Qt20BbLGWauEZktyILS371UcKrCxwPDQjmDqFYqLwwyyE3du7tuW8PD63HoqcwpkdNOurGYlJVXKO23qt+dvQ3/AGMrmzQmFx3srt6j9ZeSaxbDv3e7ru3LT0vp3vl5qgfR9jnspWtJsCcjyP4Fa9igDmb31XC56DR1uyXJWEVlrm7+ZmUjVFe1G8ZpNx3Q8evPz180JkCbB3Ft3IxCS6cF4nGHiS9SXjDfl47Q9l6veBXLgrt+T5CGC9pHtFO7fvu5XDdTnpfh3WY1eLukcIWD2cRJO4zLetmS46uOWpV825rmtiETjb2l8xq2w1ty4eazGNvjHY/7Spq081dpbW5LifRf0mmo4adW3xK7XhpuvEjVUz5t2Nh3WONiRk0AAk3trkCjdRg0dUImtzp4233M/wB4ct10h48TbTMKkUWINZHKC6zg15aDxLg0ZdbAq+7H1VqeION7sb8k9LLFW60PSoyc5ZtVpbx8xrEcABG6RlawAFgOnZe4HWS0wED3hrP8su3R/SS4ahDNv9um0xEEG6+XV5/6Y4DS28eXAdws6O29Xe7HtjJ1c1jS93Lee8OcbdSnUqU2r8Dn1cTTjKz1Ndxm8tnBwcRf7Oh4ZNF1VMbqXEFr2NPdo14kd+KCUG0GNvsWe2eNbugZun+pzPvRmHEZn+GvpHxnhNExzmj+drbm3UeiF03HivcOE4SsnFpeWn1KzM8sk3hkciE7LRSWL3Zk5nPPPmpuOUQZKwA33rZjj4svmjtNSD2ZJHvX9ClSdo3O3Tk7xXh9bEXAIGvhdcXLWDdBva+/Y5DXL5o7QMY1jpXnda1uZJIDWgZZaaWVOpKh0Tnsvb/kfgCnJojONySV5juCWggB1sxvZXPDK/BHdN3ZNiMPJtqOvcBsdx2eukMNOx/sQfDGwEl2eTpAPW2g+KaGwWIW/wAP5e0iv6byv+GlkbQyNrY28mi1+51PmijK3qj/ANVl0gtCRf0dvWpLXwMkq9kK6MXfTut0LHf7SV1hlTiDDuxmbKw3X3LR0s/ILT6mTeUdjLLVim90gf8Aa4Rek3+x3sy6ZwvUbu+cgGCzW2+Z6qFtnhwY8TtGvhdbmNCjWHZkKBt1PZsLL6vLz2aL/esvdrrrQNwVKpFrhr7b/tcrOH1g9tKxx8D27t/sujbYfIqsgrqORxBe4eEuIv1Odl2YuIVCeuvXVyC7cUPUU5a4Fbvsjin7TSBt7vYLjrbh6LAg1Xj6P8ZMUoF8iV6eqGRjmi4e3maFjNJvsFuXh/p4dxmFTZGrSa6nDm7zNHeMDhvjMgeXBUTFILPNtDn6rIPUlQJcFzZPSBNkKiLPHCS9SRXMN9XTNFwAmMQl3I3Ea2P5fFcunPs06j2SE2baSMx2+rnOnz0bcNHQG1/Mg+iBRSDdDuLHAH+U5KRtZJvSnoA30GfxugNJUe9GT74IH8wzHyXLott5n13n1GGtTtDg1YDY9Q7r3boNruy9LfNEoMcnjpo2xU0r3bpDXgDc1NnWFyexATNU0ysO7e4F7cXFmTm9y0g+Ss2y1NvQMcDz+ei6Xyx11AjKVVypP4Wt2va67uJScH2JlmcZKp5iBJJGTpXkm56N7n0V2w/Cqan/ALiBoI+u/wATz/UdPJHhRXCakoENTETmFh8Fh6Wyu/EgS1z+ZUSWqceJUuop7KBPGGtc92TWC5PyHcnIBKRe8lgJUgy1LRruC5/XchWeaGzAANAmNicLMjzM4e9n26frkrhPgjnmwCOeyQjtqcJ2l10zKsepjlI3UZH7io1HJcAjz+8LRse2dEbM9SNPtDqs5qaZ0Ly5gu3j0HX8UUXwZ5VI1FeDvYsNM0kBTGsQ/BcYp8mvJHW9j2IdkfIhWWKWm1EzT3sPvRdmxU8RNOzT9iAyEngn46E8UZgxClbrLGO7mj71CxbaujYLB4ceUY3viMvisytEzq1JO0Ys9p4QFVMTd+1TSkZxwxvaCM7vzvb9cE/Ni9RVj2UDDFGfekd71uOmn6sidBh7IYvZNzyNyfrEjMlH8uomatGV97NFQocPaYdx2YeC7/Ubgj1QIxmJ5jfnbQ8xwKudGy8EThn4QPTJBdqov3YfbNp16H801Su2jMRTUYqUeFvYhsoQ8XZqNW8SObfwXFK4xvBzFio1DVlpBBVhiYyoblYSfPqtbcdxC11Rq2x2JCop/Z38QsWn+IaKFjtNvXNrEG5HIE/jkqlslWvp5A11xYrRcXhEjWzszBycOvH4LIu68hdeFpKa2lz/ACZ/MxRiEYxOm3XHkcx2Qp4VUZXQhjSS6svURljeghWPyWid+sgPxRRvNAdq32iA5g/cSuViZf28n1ukvqDho3qxXiZPj7/GVVKiQjMcEexuW7nFV2qOShwy0O7WZ06rc0iRptc3uPqvGot+sitK2Mq45acHd3SSbhoFg7K+XXXzWSe1IuOB1HNGtlJ6pz3R0sm6QN4tcRY52yBBF810rXhY9CVOpLNJ2lb364mzRUw4LmppQBc2AHFVGCmxdwt7WJvXwg/BhXE+x1XLnPU73S73egdYD0ScqCsk7uovZt8jrFscpY7+PfI+rGb/AB0CCOdNWubdvs4Wm7GDiftE6uJHHyFkdo9iYmOzO+4WPiz+GitVDhrGDIZolZbBOrBaq/r9F9fa24xhkPsYvdJN72Az0AFh6qTDju+Dund3TuuBBa5p5ObqCpQb0Xc0YIuQhuyWUoyleSuU/EcXdJLuCKR7Qd10jjutblezQc3IJNF43G1geavdRTNdwCEz4e3kF5Mcmo6orTcIhkzMbb8SBb5KLU7MMGdsuYyt3VoLGtHABO0DBMbas0J59AjFqTvdFNGyzNQCfMpyLB2sNzECrlXwtY6zAAOQ4eSZctUmZKblu36tgyGrNg3dsByFh6J9punXULpPc4aqLUfu2SF2W41xPkCsuBLSN/PkBdmfFTjj4pP/ANCg+0zwI9w8T8lL2RnDaJrj/ET1O8VWcWrfaSE8BkE1K02jaskqMY+C5IhjJS6SpLSCDYhQ3DJexOVCVyO7voaNgOOxSWbO3Pg4ahaZhNMHRlrHbzHDhqDwI5EFfPtNJZaNsJjTg4M3u2amlHLLMh2tWDit+f280WHF6YuYbjxxkh3UfaA/Wqqs7FqUm4/KRtnW94a5Z6qsYpsxfxQPa4G9mkhp7AnIp1OZE5d6+xTd1JG//TlT/wBI+rfxST8xmZd/7o1waFV3bR37sfyu+5WKI3BVe2zj/cg/wkfL8FysSv7T25s9hP10Ytix17oFUnJHsXGvdApdFPh9jtVdwZKi+xFX7OtiPBxLD2eLfOyEVAUannLXhw1BBHcZhdSmQ5lGSbPpaBtgnuCb2d/f0zJxo5oPnbP4ruHiORUsk07MY2rtdxCkpQRxBJvvDW/64KO+oli1bvjnax+CJubmnWMuF63cNVW3zK6BLcZ5xkdyR8wuDjY4sy6G6LuoGcvRMvwth1useYJVcP8A48wFPjR0Y0ds3H0aoMk9TIbNbujsB+J+CtbMNjHBdOa1osAB2WWYzt6e0YlXgwJx8UzienPup29uZDIDIBS6qYBCZ5borgycpO7OKh+8bpouXLpEwXrULaCeA1YbPuu91+XmmfpMwiQ0sroBdxbYjiW/Wt1tdRI2Z3Vq2fxmOpMlOHAyQ2Dweov8Pmts91uuQqurwtfhZ+Xf6cTAG47/AO1ZBaxblyv3UGJXL6UdkhTz+3iH7qQ5tA9x34FVKEKiMoyWZcSeM5T+bdadcztrck00ZqUFHGqZA2RPgai+D1Zjka7kUIpuCntGiGYcNHdG7YPVCopwfrbtvhkboNUxu8QFwTc5fbbr6j5ob9GlfmYzx/QVuxWms7e5+Lzb+V0lXWoqcVGo0tnquvMpnt3/AGivUd/sZvNJFmn/AIsztoltweo3m9QmMei34ZG8QL+RUTZ+Wz7cwi9ZH6OG6fNKks9DL5r32/8AVhMrQrJ+pg+NxZuCrMo1Wkbd4X7N4cNHDPvxWc1TbOUGHfA7EpKUVJAycLvAcFfVVMcLBm5wB6DifRKRuq3H6LtjhRx/tU4tM9uTT/lsOef8R48tOa6tJ8XsR1GofE/bv64+Bao6dlJTMp4xk1oaPvPqocDbfeqd9Jm2XsJImMd43OBI5Mbz76Kz4FiLJ4myMOo9DxCVK8rzZlJWg9db6+ZOLEmrpzVwUsLcduuHvTZcmJXFebCjAUtTZQJ6oruUKJK1DcrhGKIs8pKgyvUioaoEhWo2UkJzly0rxrLp6d7IWGWVwaxvE8TwAHEnkiFN8Tiur2U8L5pDYNHhHFzj7rR1KzLZraeSmrRVEk7zj7UD6zHajy4dk1tXtC6qkvbdjbcMZyH2jzcfyQNrbnndWUaeXVnOnVcqikuHX77eR9H7QRR1MGdnRyNDge4uCFh1fQuhldG76py6jgVqOwkNSykMFVE5m5nEXbvun6tgbix5jihu1WCiZu8MpG3seY+yVLpTm1wKpRvrHpfdGduOSaYu6i4y46FeQsurYoRuydAMgiEY0UaNlrKTFqlzGQ3LRsZUFkzbcwtYxQeBp6rHtnMpm91sVZnG3y+SXH5ZenNA4nem/MHfs/VJP7w5lJF2ovtJHlOCx4KsTSHtLT+uqFVFOumSkDeGrdeykp1Mr8OIE450miFtXgvt4XNGbgLjqeJCwnFIC1xaRYg2K+k45BI0HQ/JUDbXYp1Q9skYaJXEB1smvF/7wDmNSF6rRtPPDjv9+vMPDV3F5JfwVX6L9kv2ib9olbeKI5Dg+TX0br3stYxytbFGScg0egCewjDmUlOyFnusbbudS49SblZj9K+0Ph/Z2HN+tvs8dOenqjqStaCPZnVndbLYyfazE3VNTJKdCbN6NGn4+aI7G7Zy0bwL70Ztdp0P5oJUR3Q5wVkLONgW3Slp/PmfUOA4/DVM3ong5Zj6ze4RB6+X8HxmWneHxuLSOS1vZX6RmSgMn8LvtDTzHBJnQa1iUQlGT00fd9maFZL2SagqWuALSCDoQbgqUx4SLByuiM+mUGqgsi7nKBVZoWMpzbepXakKKKclGJi1uZIAVXxna6KO4jAcR6LUhqVwhiNXFTRmWU2A0aPeceQCyPaTaKSqfvONmi+4we6wfeeZTW0ONyVEhL3E/LyHAILZV0qNtZEGIq5nZbI9BVq+jyma+vg3xdrXb5Fr33AXDLuAqzC25W0fQ3gTPYPqntBc9xYy/BjbXt3d8k2csqbBoRSeZ8C6yyCS5APmhdeCBbdHoj7mhpyQrEmXXNK4mT7YYVZ3tmjI5P6HgbIPh0FzdaHitOHBzSLgghVN0AjG7x0VVGp8Nhc6eV3WwwQu4Qm3ck4xEzEWPZRl52DqtXxWTdY0frks6+j6i35g46DP04eiu20s1m38gvJWi/GyAru84LuTYN/av4l6gPtV4hyrr+QbGryMUOSMg3CIpp7FDqiWEraEBrrAkZDiOSm4bE7d3nG9/d7c/NRXQneFtSbeXFFmgAWGgyVuHjGSztbaddaHqstLLiDMYkfuHcF+ZPBZHj2yPt5HzOmdvu7brQNAMr2W01DsiqtNhbGNLyBfUkhSyTUm7lWFlHLZowLGcDlhJ3m3A+s3Mfl5oDPHxX0HOQ64bGXX/hy9Ss3232YEbTOxu7n4mjTuANE+nVadmMqwstdjOgnoXkZhdGHNOxU+arckTKDuW3ZbaSaMFrXaZ2OhHZXGn29cB4o7nobLN8Ois64RctyU1Te52MPaVNJ8NOvQusn0h8ovUoXWbfSu91jR3JKq8rVDlKGyGZIrgT8Ux6eb3nm3IZBVvE6r6oPf8FOcUBlddxPUp1KKbuR4qo4Ryx4ja9ASATkbVQ2c9K45EzgF9G7OYC2np4WjUMbf+Yi7viSvnqEWW5bAbXtqovZPFp4mi4+20WG8PvCnq3lHQrhdRdul+C2Wy0UOphup8Trr2SJStGp2ZS8TpVUsdost8cMj25rTK+kuq3XUmoIuDwSlUcXcrjFVI5TOgU/A25XeJ0RikLeBzb2TsYDACdTounC0rW4kDdtzT/o/ha2In6xXm1k1yLaaHoUG2Oxob4YeKMbRx+J45jeHcZ/im1oWsJn8+bw5Fa3l6mkkGU25tBXhSK8K5ciVHtOy7r8vvUlyF01Taf2fBzCfNp/Aom5dCmrUUBP5iLMVAqowRYi+d1PlQ2smsCpZFFJag2veAFSNppWPa5jswQb9AM0YxnENc1QsZrS8OHOw7i+a9Tg5yUUXuNqbb7ikCLNSIolLbRXOSnUuHC+aueHnfYljNCoaY7pPHgrVT4GZoQ+PM2zCH+yyyVo+jyaz3xnnceaDE0rJJcC3DVbZl4X9ikVtG5hIIseqEzsW8Y7s3FOMxY8ws3xrYyRh8JuFHGT2ZRDEQmrlGEd8kBmbZxHIlXPEqT2DTf8AvCPCBwvxPxVSqKYg381VSdiLFyUrJcCO0KTE1MRhS2pk2Iieko1sdippquKbPdBs+32HZH8fJB2MubIrTRBguUMdA02nc3+KtYQ2Rrg5r7WI0PJEoyCvniix+eJ14nlo+yc2u7tK1XYHap1SDHKA2RuY3b2e3pfiEqdLS6CaTWhb54clX8TplahmEKxOHJQVEMw9VqVmZ7jNGHDQFzc2g6E8ndOipb5HOcS43PH8hwWk4hFqqBisG7K4cDmPPX4rof02V5OD80bj47TXk/oPYPUFkrXciFpWPTXDHc2fcstiFrK+1lRemiP8Nl1MRH4F5kCd4+TBW8ko2+vVOeNyXhXq8XHYoFVPhqoDe195uut2mwR1xQTExaWnd/3beoKMSHJWpvso+vMCSvYizvVaxuosDmjtS5VDaKXIqabuX4eJS8eq3O8INuZ6dFXak6chkiOIPu8ofIF3cFg4xhGo92va/wCDMRXbvBbXIzDmiFO5DnhSqd6e4k8QxGckT2cn3J2nnkg0L05Sz7sjT1ChrxLMPK00bZEd5oPRCsY3WMc93utBcewF09hNTeMIPt1Pakk/i3W+rguTMzK4SaMbxqoMkj5XfWNwOQ4D0VcmkzPdHMXcgUzck+mZPuGg1PQsum2BEKaEnIJrMidMAaOqlxUL3m58IU6koWs8R15n7uS9nrgMm5rEzTqGkjZrbuU9Bi5ie2SPJzTcHh+YQeWcnUprfRxi9zzlY3/Y7aFlZG5zQQW2DmngSL5dEUrW3CzL6Haq00sf22gju0/mtSnCkxEEpaGaKSa49MpuJxZqlbSU1nNfw0WiYrAqptFS70LubfEPJLwsuzrRfjzLK3x0X7lRcFamyXpY+lwqvwCsFLnTN6Er6GuvhOXDZ+hGskurr1RhWNzcuUklxWJBOP8AvU3/AM7Uak0SSV//ABR9eYPD1f0BlQqbtHokkpJHSomeVXvFRXrxJfW0f0o+S5EVT535sizLunSSS57nohKFI+8O4+aSSixGxRS+ZGtYL7o7BCdv/wDCn+dvzKSS4ktiqv8AqMxzGP18UGl91JJUwJ58TmFHcG1HmvUkbMiEazQ9vvQheJLImvcbfouWpJKhC2Xj6Kf8YP5T8ls0iSSmxW68g+C64gPE1WsX/upP5SkkoV+pHzXMsX6cvJ8iis0Vgo/8MP5kkl9NiPk9jlw4kdJJJRBH/9k="}/>
            {message}
            <div>
                <span>{likes}</span>
            </div>
        </div>

    )
}