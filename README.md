# Implement Maps application
EXAMの番号順に説明していきます。  
1. 東京のレストランの情報を取得するため今回はGooglePlaceAPI(NEW)を利用しました。後の課題でレストランのタイプのデータが必要だったのでNEWを利用することにしました。
   今回は東京のレストランという指定でしたが、無料プランを超過する可能性も考慮して20件の表示に留めました。searchNearbyを使い新宿都庁の周り半径500m以内で検索をかけました。
   CORSの関係でブラウザ表示をする時にエラーが発生しましたので、対策のために今回はjsonファイルではなくjsファイルでデータを保存して利用しています。
2. Maps JavaScript API を使用して、1.で取得したデータをresponse.jsから読みこみピンで場所をピンで表示しています。
3. ピンをクリックすると情報ウィンドウが出るように実装しています。今回は店名、住所、電話番号、レーティングを情報として載せました。
4. 画面上部にTypeと表示したパネルを配置しました。選択されたTypeの店のピンのみ表示するようにしています。また、画面左下にはクリックしたピンのレストランタイプの属性をすべて表示させました。
5. 左下に二つのボタンを配置しました。まず目的地のピンを選択し、CurrentLocationボタンを押して現在地を取得します。その後、DisplayRouteボタンを押すとルートを表示するように実装しました。今回は移動手段をDRIVINGのみに限って実装しました。
8. 東京のレストランという指定でしたが、今回使用したAPIの関数では20件のみしか取得できなかったのでデータ数を大幅に減らしてしまったことは問題だと考えています。料金プランを考慮したことが理由の一つですが、もっとデータ数を増やすことも可能だと考えています。
   また、都内という条件ではなく都庁の周りという検索手段を取ったことはEXAMの意図とずれることも考えられ課題であったと感じました。また、データを準備する作業はデータ表示されるコードと完全に独立させてしまったので、アプリケーションとしての改良の余地があると感じました。
   移動手段を今回はDRIVINGに限定しましたが、電車やバスなどの交通機関を利用する選択肢があるとより良かったと考えています。
   また、情報パネルの見た目やボタンの見た目など、インターフェイスのデザインをもっと見やすくする工夫は今後も続けるとすれば取り組む必要があると考えます。


# Implementing Maps Application
I will explain in order of the EXAM numbers.
1. To retrieve information about restaurants in Tokyo, I utilized the Google Place API (NEW) based on the EXAM sequence. Since I needed data on the types of restaurants for future tasks, I chose to use the NEW version. Although the specification was for restaurants in Tokyo this time, I limited the display to 20 entries, considering the possibility of exceeding the free plan. I used the searchNearby function to search within a 500m radius around the Shinjuku Metropolitan Government Building. Due to CORS issues, errors occurred when displaying in the browser, so to address this, I saved the data in a .js file instead of a JSON file for use.
2. Using the Maps JavaScript API, I loaded the data obtained in step 1 from response.js and displayed the locations with pins.
3. Implemented the functionality for an information window to appear when clicking on a pin. For this task, I included the restaurant name, address, phone number, and rating as information.
4. Placed a panel labeled "Type" at the top of the screen. It is configured to display only pins of the selected type. Additionally, at the bottom left of the screen, I display all attributes of the restaurant type when a pin is clicked.
5. Placed two buttons at the bottom left. First, select the destination pin and press the "CurrentLocation" button to obtain the current location. Then, pressing the "DisplayRoute" button will display the route. I implemented this feature with only the "DRIVING" mode for transportation.
8. Although the specification was for restaurants in Tokyo, the function of the API used this time could only retrieve 20 entries, which I consider a problem as it significantly reduced the data. One reason for this is considering the pricing plan, but I believe it is possible to increase the data volume. Also, choosing the search method around the Metropolitan Government Building instead of within the entire city may deviate from the intent of the EXAM and is considered a challenge. Additionally, the preparation of data was completely separated from the code displaying the data, and I feel there is room for improvement as an application. While I limited the mode of transportation to "DRIVING" this time, having options such as trains or buses would have been better. Furthermore, for the appearance of the information panel and buttons, improving the interface design to make it more user-friendly is an ongoing consideration for future enhancements.
