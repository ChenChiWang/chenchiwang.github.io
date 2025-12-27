# 🇩🇪 德文 A1-A2 動詞變位終極矩陣 (降維打擊)

這份矩陣透過 7 行規律解決變位難點。字幹保持黑色，詞尾與母音變異處按人稱精準標色。

---

<style>
/* 表格滑動與樣式 */
.verb-matrix {
  display: block;
  overflow-x: auto;
  white-space: nowrap;
  margin-bottom: 30px;
}
.verb-matrix td { 
  min-width: 110px; 
  padding: 8px 10px; 
  border: 1px solid #eee; 
  font-size: 0.92em; 
  vertical-align: middle; 
}
.verb-matrix th { 
  background-color: #f8f9fa; 
  font-weight: bold; 
  text-align: center;
}
</style>

## 🎨 第一部分配色邏輯
- <span style="color:#4169E1; font-weight:bold">藍色</span>：**ich** (-e) / **du** (-st) 詞尾。
- <span style="color:#FF6B6B; font-weight:bold">紅色</span>：**er/sie/es** 變化，以及 **du** 的「母音變異」。
- <span style="color:#2ECC71; font-weight:bold">綠色</span>：**wir / sie / Sie** 複數詞尾。
- <span style="color:#FFA500; font-weight:bold">橘色</span>：**ihr** 複數詞尾。
- <span style="color:#9B59B6; font-weight:bold">紫色 (ist)</span>：完成式助動詞 (位移/狀態轉變)。
- <span style="color:#A0522D; font-weight:bold">棕色 (hat)</span>：完成式助動詞 (一般動作)。

---

<div class="mermaid">
graph TD;
    Verben[德文動詞全庫] --> Logic[變位邏輯分類]
    Verben --> Struct[結構特徵分類]
    Verben --> Usage[用法格位分類]

    Logic --> Weak[規則動詞: 字幹不變, 詞尾固定]
    Logic --> Strong[強變化動詞: du/er/sie/es 母音變異]
    Logic --> Modal[情態動詞: ich=er/sie/es, 單數母音大變]

    Struct --> Sep[可分動詞: 前綴噴到句尾, 完成式ge夾中間]
    Struct --> Insep[不可分動詞: 前綴不拆, 完成式不加ge]

    Usage --> Positional[方位動詞: 3靜4動密碼]
    Positional --> D3[3 靜: 處於某處 -> 用 Dativ + 強變化完成式]
    Positional --> A4[4 動: 移向某處 -> 用 Akkusativ + 弱變化完成式]
</div>

---

## 1. 核心助動詞與基礎移動類

| 人稱 \ 動詞 | sein (是) | haben (有) | machen (做) | lernen (學) | kommen (來) | gehen (去) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **ich** | <span style="color:#4169E1">**bin**</span> | hab<span style="color:#4169E1">**e**</span> | mach<span style="color:#4169E1">**e**</span> | lern<span style="color:#4169E1">**e**</span> | komm<span style="color:#4169E1">**e**</span> | geh<span style="color:#4169E1">**e**</span> |
| **du** | <span style="color:#4169E1">**bist**</span> | ha<span style="color:#4169E1">**st**</span> | mach<span style="color:#4169E1">**st**</span> | lern<span style="color:#4169E1">**st**</span> | komm<span style="color:#4169E1">**st**</span> | geh<span style="color:#4169E1">**st**</span> |
| **er/sie/es** | <span style="color:#FF6B6B">**ist**</span> | ha<span style="color:#FF6B6B">**t**</span> | mach<span style="color:#FF6B6B">**t**</span> | lern<span style="color:#FF6B6B">**t**</span> | komm<span style="color:#FF6B6B">**t**</span> | geh<span style="color:#FF6B6B">**t**</span> |
| **wir** | <span style="color:#2ECC71">sind</span> | hab<span style="color:#2ECC71">**en**</span> | mach<span style="color:#2ECC71">**en**</span> | lern<span style="color:#2ECC71">**en**</span> | komm<span style="color:#2ECC71">**en**</span> | geh<span style="color:#2ECC71">**en**</span> |
| **ihr** | <span style="color:#FFA500">seid</span> | hab<span style="color:#FFA500">**t**</span> | mach<span style="color:#FFA500">**t**</span> | lern<span style="color:#FFA500">**t**</span> | komm<span style="color:#FFA500">**t**</span> | geh<span style="color:#FFA500">**t**</span> |
| **sie/Sie** | <span style="color:#2ECC71">sind</span> | hab<span style="color:#2ECC71">**en**</span> | mach<span style="color:#2ECC71">**en**</span> | lern<span style="color:#2ECC71">**en**</span> | komm<span style="color:#2ECC71">**en**</span> | geh<span style="color:#2ECC71">**en**</span> |
| **[Perfekt]** | <span style="color:#9B59B6">**ist**</span> gewesen | <span style="color:#A0522D">**hat**</span> gehabt | <span style="color:#A0522D">**hat**</span> gjort | <span style="color:#A0522D">**hat**</span> gelernt | <span style="color:#9B59B6">**ist**</span> gekommen | <span style="color:#9B59B6">**ist**</span> gegangen |
{: .verb-matrix }

---

## 2. 強變化母音系列 (a → ä / au → äu / e → i / ie)



| 人稱 \ 動詞 | fahren (開) | laufen (跑) | bleiben (留) | essen (吃) | schlafen (睡) | sehen (看) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **ich** | fahr<span style="color:#4169E1">**e**</span> | lauf<span style="color:#4169E1">**e**</span> | bleib<span style="color:#4169E1">**e**</span> | ess<span style="color:#4169E1">**e**</span> | schlaf<span style="color:#4169E1">**e**</span> | seh<span style="color:#4169E1">**e**</span> |
| **du** | f<span style="color:#FF6B6B">**ä**</span>hr<span style="color:#4169E1">**st**</span> | l<span style="color:#FF6B6B">**äu**</span>f<span style="color:#4169E1">**st**</span> | bleib<span style="color:#4169E1">**st**</span> | <span style="color:#FF6B6B">**i**</span>sst | schl<span style="color:#FF6B6B">**ä**</span>f<span style="color:#4169E1">**st**</span> | s<span style="color:#FF6B6B">**ie**</span>h<span style="color:#4169E1">**st**</span> |
| **er/sie/es** | f<span style="color:#FF6B6B">**ä**</span>hr<span style="color:#FF6B6B">**t**</span> | l<span style="color:#FF6B6B">**äu**</span>f<span style="color:#FF6B6B">**t**</span> | bleib<span style="color:#FF6B6B">**t**</span> | <span style="color:#FF6B6B">**i**</span>sst | schl<span style="color:#FF6B6B">**ä**</span>f<span style="color:#FF6B6B">**t**</span> | s<span style="color:#FF6B6B">**ie**</span>h<span style="color:#FF6B6B">**t**</span> |
| **wir** | fahr<span style="color:#2ECC71">**en**</span> | lauf<span style="color:#2ECC71">**en**</span> | bleib<span style="color:#2ECC71">**en**</span> | ess<span style="color:#2ECC71">**en**</span> | schlaf<span style="color:#2ECC71">**en**</span> | seh<span style="color:#2ECC71">**en**</span> |
| **ihr** | fahr<span style="color:#FFA500">**t**</span> | lauf<span style="color:#FFA500">**t**</span> | bleib<span style="color:#FFA500">**t**</span> | ess<span style="color:#FFA500">**t**</span> | schlaf<span style="color:#FFA500">**t**</span> | seh<span style="color:#FFA500">**t**</span> |
| **sie/Sie** | fahr<span style="color:#2ECC71">**en**</span> | lauf<span style="color:#2ECC71">**en**</span> | bleib<span style="color:#2ECC71">**en**</span> | ess<span style="color:#2ECC71">**en**</span> | schlaf<span style="color:#2ECC71">**en**</span> | seh<span style="color:#2ECC71">**en**</span> |
| **[Perfekt]** | <span style="color:#9B59B6">**ist**</span> gefahren | <span style="color:#9B59B6">**ist**</span> gelaufen | <span style="color:#9B59B6">**ist**</span> geblieben | <span style="color:#A0522D">**hat**</span> gegessen | <span style="color:#A0522D">**hat**</span> geschlafen | <span style="color:#A0522D">**hat**</span> gesehen |
{: .verb-matrix }

| 人稱 \ 動詞 | lesen (讀) | geben (給) | nehmen (拿) | helfen (幫) | sprechen (說) | treffen (見) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **ich** | les<span style="color:#4169E1">**e**</span> | geb<span style="color:#4169E1">**e**</span> | nehm<span style="color:#4169E1">**e**</span> | helf<span style="color:#4169E1">**e**</span> | sprech<span style="color:#4169E1">**e**</span> | treff<span style="color:#4169E1">**e**</span> |
| **du** | l<span style="color:#FF6B6B">**ie**</span>st | g<span style="color:#FF6B6B">**i**</span>b<span style="color:#4169E1">**st**</span> | n<span style="color:#FF6B6B">**i**</span>mm<span style="color:#4169E1">**st**</span> | h<span style="color:#FF6B6B">**ilf**</span><span style="color:#4169E1">**st**</span> | spr<span style="color:#FF6B6B">**i**</span>ch<span style="color:#4169E1">**st**</span> | tr<span style="color:#FF6B6B">**iff**</span><span style="color:#4169E1">**st**</span> |
| **er/sie/es** | l<span style="color:#FF6B6B">**ie**</span>st | g<span style="color:#FF6B6B">**i**</span>b<span style="color:#FF6B6B">**t**</span> | n<span style="color:#FF6B6B">**i**</span>mm<span style="color:#FF6B6B">**t**</span> | h<span style="color:#FF6B6B">**ilf**</span><span style="color:#FF6B6B">**t**</span> | spr<span style="color:#FF6B6B">**i**</span>ch<span style="color:#FF6B6B">**t**</span> | tr<span style="color:#FF6B6B">**iff**</span><span style="color:#FF6B6B">**t**</span> |
| **wir** | les<span style="color:#2ECC71">**en**</span> | geb<span style="color:#2ECC71">**en**</span> | nehm<span style="color:#2ECC71">**en**</span> | helf<span style="color:#2ECC71">**en**</span> | sprech<span style="color:#2ECC71">**en**</span> | treff<span style="color:#2ECC71">**en**</span> |
| **ihr** | les<span style="color:#FFA500">**t**</span> | geb<span style="color:#FFA500">**t**</span> | nehm<span style="color:#FFA500">**t**</span> | helf<span style="color:#FFA500">**t**</span> | sprech<span style="color:#FFA500">**t**</span> | treff<span style="color:#FFA500">**t**</span> |
| **sie/Sie** | les<span style="color:#2ECC71">**en**</span> | geb<span style="color:#2ECC71">**en**</span> | nehm<span style="color:#2ECC71">**en**</span> | helf<span style="color:#2ECC71">**en**</span> | sprech<span style="color:#2ECC71">**en**</span> | treff<span style="color:#2ECC71">**en**</span> |
| **[Perfekt]** | <span style="color:#A0522D">**hat**</span> gelesen | <span style="color:#A0522D">**hat**</span> gegeben | <span style="color:#A0522D">**hat**</span> genommen | <span style="color:#A0522D">**hat**</span> geholfen | <span style="color:#A0522D">**hat**</span> gesprochen | <span style="color:#A0522D">**hat**</span> getroffen |
{: .verb-matrix }

---

## 3. 情態助動詞 (Modalverben)



| 人稱 \ 動詞 | können (能) | müssen (須) | wollen (要) | dürfen (准) | sollen (應) | mögen (喜) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **ich** | <span style="color:#4169E1">**kann**</span> | <span style="color:#4169E1">**muss**</span> | <span style="color:#4169E1">**will**</span> | <span style="color:#4169E1">**darf**</span> | <span style="color:#4169E1">**soll**</span> | <span style="color:#4169E1">**mag**</span> |
| **du** | <span style="color:#4169E1">kann</span><span style="color:#4169E1">**st**</span> | <span style="color:#4169E1">muss</span><span style="color:#4169E1">**t**</span> | <span style="color:#4169E1">will</span><span style="color:#4169E1">**st**</span> | <span style="color:#4169E1">darf</span><span style="color:#4169E1">**st**</span> | <span style="color:#4169E1">soll</span><span style="color:#4169E1">**st**</span> | <span style="color:#4169E1">mag</span><span style="color:#4169E1">**st**</span> |
| **er/sie/es** | <span style="color:#FF6B6B">**kann**</span> | <span style="color:#FF6B6B">**muss**</span> | <span style="color:#FF6B6B">**will**</span> | <span style="color:#FF6B6B">**darf**</span> | <span style="color:#FF6B6B">**soll**</span> | <span style="color:#FF6B6B">**mag**</span> |
| **wir** | könn<span style="color:#2ECC71">**en**</span> | müss<span style="color:#2ECC71">**en**</span> | woll<span style="color:#2ECC71">**en**</span> | dürf<span style="color:#2ECC71">**en**</span> | soll<span style="color:#2ECC71">**en**</span> | mög<span style="color:#2ECC71">**en**</span> |
| **ihr** | könn<span style="color:#FFA500">**t**</span> | müss<span style="color:#FFA500">**t**</span> | woll<span style="color:#FFA500">**t**</span> | dürf<span style="color:#FFA500">**t**</span> | soll<span style="color:#FFA500">**t**</span> | mög<span style="color:#FFA500">**t**</span> |
| **sie/Sie** | könn<span style="color:#2ECC71">**en**</span> | müss<span style="color:#2ECC71">**en**</span> | woll<span style="color:#2ECC71">**en**</span> | dürf<span style="color:#2ECC71">**en**</span> | soll<span style="color:#2ECC71">**en**</span> | mög<span style="color:#2ECC71">**en**</span> |
| **[Perfekt]** | <span style="color:#A0522D">**hat**</span> gekonnt | <span style="color:#A0522D">**hat**</span> gemusst | <span style="color:#A0522D">**hat**</span> gewollt | <span style="color:#A0522D">**hat**</span> gedurft | <span style="color:#A0522D">**hat**</span> gesollt | <span style="color:#A0522D">**hat**</span> gemogt |
{: .verb-matrix }


---

## 4. 前綴與 A2 反身概念 (Prefix & Reflexive)
可分動詞現在式前綴丟句尾，完成式 `ge` 夾在中間；不可分動詞 (`be-/ver-/ent-/er-`) 完成式 **不加 ge**。

| 人稱 \ 動詞 | anfangen (可) | vorhaben (可) | beginnen (不) | beenden (不) | besuchen (不) | verstehen (不) | sich waschen (反) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **ich** | fang<span style="color:#4169E1">**e**</span> **an** | hab<span style="color:#4169E1">**e**</span> **vor** | beginn<span style="color:#4169E1">**e**</span> | beend<span style="color:#4169E1">**e**</span> | besuch<span style="color:#4169E1">**e**</span> | versteh<span style="color:#4169E1">**e**</span> | <span style="color:#4169E1">wasch**e**</span> **mich** |
| **du** | f<span style="color:#FF6B6B">**ä**</span>ng<span style="color:#4169E1">**st**</span> **an** | ha<span style="color:#FF6B6B">**st**</span> **vor** | beginn<span style="color:#4169E1">**st**</span> | beende<span style="color:#4169E1">**st**</span> | besuch<span style="color:#4169E1">**st**</span> | versteh<span style="color:#4169E1">**st**</span> | <span style="color:#FF6B6B">w**ä**sch**st**</span> **dich** |
| **er/sie/es** | f<span style="color:#FF6B6B">**ä**</span>ng<span style="color:#FF6B6B">**t**</span> **an** | ha<span style="color:#FF6B6B">**t**</span> **vor** | beginn<span style="color:#FF6B6B">**t**</span> | beende<span style="color:#FF6B6B">**t**</span> | besuch<span style="color:#FF6B6B">**t**</span> | versteh<span style="color:#FF6B6B">**t**</span> | <span style="color:#FF6B6B">w**ä**sch**t**</span> **sich** |
| **wir** | fang<span style="color:#2ECC71">**en**</span> **an** | hab<span style="color:#2ECC71">**en**</span> **vor** | beginn<span style="color:#2ECC71">**en**</span> | beend<span style="color:#2ECC71">**en**</span> | besuch<span style="color:#2ECC71">**en**</span> | versteh<span style="color:#2ECC71">**en**</span> | <span style="color:#2ECC71">wasch**en**</span> **uns** |
| **ihr** | fang<span style="color:#FFA500">**t**</span> **an** | hab<span style="color:#FFA500">**t**</span> **vor** | beginn<span style="color:#FFA500">**t**</span> | beende<span style="color:#FFA500">**t**</span> | besuch<span style="color:#FFA500">**t**</span> | versteh<span style="color:#FFA500">**t**</span> | <span style="color:#FFA500">wasch**t**</span> **euch** |
| **sie/Sie** | fang<span style="color:#2ECC71">**en**</span> **an** | hab<span style="color:#2ECC71">**en**</span> **vor** | beginn<span style="color:#2ECC71">**en**</span> | beend<span style="color:#2ECC71">**en**</span> | besuch<span style="color:#2ECC71">**en**</span> | versteh<span style="color:#2ECC71">**en**</span> | <span style="color:#2ECC71">wasch**en**</span> **sich** |
| **[Perfekt]** | <span style="color:#A0522D">**hat**</span> **ange**fangen | <span style="color:#A0522D">**hat**</span> **vorge**habt | <span style="color:#A0522D">**hat**</span> begonnen | <span style="color:#A0522D">**hat**</span> beendet | <span style="color:#A0522D">**hat**</span> besucht | <span style="color:#A0522D">**hat**</span> verstanden | <span style="color:#A0522D">**hat**</span> **sich** gewaschen |
{: .verb-matrix }

---

## 5. 3 靜 4 動：方位動詞矩陣 (Positional)
方位動詞區分「在哪裡」與「去哪裡」，這在德文語法中是絕對的降維打擊重點。

<div class="grammar-note">
  <b>💡 3 靜 4 動 判斷密碼：</b><br>
  - <b>3 靜 (Wo? / Dativ)</b>：表示靜態位置。完成式通常為「強變化」(不規則)。<br>
  - <b>4 動 (Wohin? / Akkusativ)</b>：表示向某處位移。完成式皆為「弱變化」(規則)。
</div>

| 人稱 \ 動詞 | stehen (靜站) | stellen (動放) | liegen (靜躺) | legen (動放) | sitzen (靜坐) | setzen (使坐) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **格位需求** | **Dativ (3)** | **Akk (4)** | **Dativ (3)** | **Akk (4)** | **Dativ (3)** | **Akk (4)** |
| **ich** | steh<span style="color:#4169E1">**e**</span> | stell<span style="color:#4169E1">**e**</span> | lieg<span style="color:#4169E1">**e**</span> | leg<span style="color:#4169E1">**e**</span> | sitz<span style="color:#4169E1">**e**</span> | setz<span style="color:#4169E1">**e**</span> |
| **du** | steh<span style="color:#4169E1">**st**</span> | stell<span style="color:#4169E1">**st**</span> | lieg<span style="color:#4169E1">**st**</span> | leg<span style="color:#4169E1">**st**</span> | sitz<span style="color:#4169E1">**st**</span> | setz<span style="color:#4169E1">**st**</span> |
| **er/sie/es** | steh<span style="color:#FF6B6B">**t**</span> | stell<span style="color:#FF6B6B">**t**</span> | lieg<span style="color:#FF6B6B">**t**</span> | leg<span style="color:#FF6B6B">**t**</span> | sitz<span style="color:#FF6B6B">**t**</span> | setz<span style="color:#FF6B6B">**t**</span> |
| **wir** | steh<span style="color:#2ECC71">**en**</span> | stell<span style="color:#2ECC71">**en**</span> | lieg<span style="color:#2ECC71">**en**</span> | leg<span style="color:#2ECC71">**en**</span> | sitz<span style="color:#2ECC71">**en**</span> | setz<span style="color:#2ECC71">**en**</span> |
| **ihr** | steh<span style="color:#FFA500">**t**</span> | stell<span style="color:#FFA500">**t**</span> | lieg<span style="color:#FFA500">**t**</span> | leg<span style="color:#FFA500">**t**</span> | sitz<span style="color:#FFA500">**t**</span> | setz<span style="color:#FFA500">**t**</span> |
| **sie/Sie** | steh<span style="color:#2ECC71">**en**</span> | stell<span style="color:#2ECC71">**en**</span> | lieg<span style="color:#2ECC71">**en**</span> | leg<span style="color:#2ECC71">**en**</span> | sitz<span style="color:#2ECC71">**en**</span> | setz<span style="color:#2ECC71">**en**</span> |
| **[Perfekt]** | <span style="color:#A0522D">**hat**</span> **gestanden** | <span style="color:#A0522D">**hat**</span> **gestellt** | <span style="color:#A0522D">**hat**</span> **gelegen** | <span style="color:#A0522D">**hat**</span> **gelegt** | <span style="color:#A0522D">**hat**</span> **gesessen** | <span style="color:#A0522D">**hat**</span> **gesetzt** |
{: .verb-matrix }

| 人稱 \ 動詞 | hängen (靜態掛) | hängen (動態掛) |
| :--- | :--- | :--- |
| **格位對應** | **Dativ (三格)** | **Akkusativ (四格)** |
| **現在式(3rd)** | häng<span style="color:#FF6B6B">**t**</span> | häng<span style="color:#FF6B6B">**t**</span> |
| **[Perfekt]** | <span style="color:#A0522D">**hat**</span> **gehangen** | <span style="color:#A0522D">**hat**</span> **gehängt** |
{: .verb-matrix }

---

## 6. 認知、特殊與混合變化 (Cognitive & Mixed)

| 人稱 \ 動詞 | wissen (知) | denken (想) | glauben (信) | kennen (認) | vergessen (忘) | heißen (名叫) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **ich** | <span style="color:#4169E1">**weiß**</span> | denk<span style="color:#4169E1">**e**</span> | glaub<span style="color:#4169E1">**e**</span> | kenn<span style="color:#4169E1">**e**</span> | vergess<span style="color:#4169E1">**e**</span> | heiß<span style="color:#4169E1">**e**</span> |
| **du** | <span style="color:#4169E1">**weiß**</span><span style="color:#4169E1">**t**</span> | denk<span style="color:#4169E1">**st**</span> | glaub<span style="color:#4169E1">**st**</span> | kenn<span style="color:#4169E1">**st**</span> | <span style="color:#FF6B6B">vergiss</span><span style="color:#4169E1">**t**</span> | heiß<span style="color:#4169E1">**t**</span> |
| **er/sie/es** | <span style="color:#FF6B6B">**weiß**</span> | denk<span style="color:#FF6B6B">**t**</span> | glaub<span style="color:#FF6B6B">**t**</span> | kenn<span style="color:#FF6B6B">**t**</span> | <span style="color:#FF6B6B">vergiss</span><span style="color:#FF6B6B">**t**</span> | heiß<span style="color:#4169E1">**t**</span> |
| **wir** | wiss<span style="color:#2ECC71">**en**</span> | denk<span style="color:#2ECC71">**en**</span> | glaub<span style="color:#2ECC71">**en**</span> | kenn<span style="color:#2ECC71">**en**</span> | vergess<span style="color:#2ECC71">**en**</span> | heiß<span style="color:#2ECC71">**en**</span> |
| **ihr** | wiss<span style="color:#FFA500">**t**</span> | denk<span style="color:#FFA500">**t**</span> | glaub<span style="color:#FFA500">**t**</span> | kenn<span style="color:#FFA500">**t**</span> | vergess<span style="color:#FFA500">**t**</span> | heiß<span style="color:#FFA500">**t**</span> |
| **sie/Sie** | wiss<span style="color:#2ECC71">**en**</span> | denk<span style="color:#2ECC71">**en**</span> | glaub<span style="color:#2ECC71">**en**</span> | kenn<span style="color:#2ECC71">**en**</span> | vergess<span style="color:#2ECC71">**en**</span> | heiß<span style="color:#2ECC71">**en**</span> |
| **[Perfekt]** | <span style="color:#A0522D">**hat**</span> **gewusst** | <span style="color:#A0522D">**hat**</span> **gedacht** | <span style="color:#A0522D">**hat**</span> geglaubt | <span style="color:#A0522D">**hat**</span> **gekannt** | <span style="color:#A0522D">**hat**</span> **vergessen** | <span style="color:#A0522D">**hat**</span> geheißen |
{: .verb-matrix }

---

## ✨ A1-A2 降維總結

1.  **助動詞判定**：移動 (A→B) 或是狀態變化（醒來/死掉）用 <span style="color:#9B59B6; font-weight:bold">sein (紫)</span>；其餘動作或及物動詞用 <span style="color:#A0522D; font-weight:bold">haben (棕)</span>。
2.  **不規則母音變化**：僅發生在 **du** 和 **er/sie/es**，請優先記憶這兩個位置的紅色標記。
3.  **不可分前綴 (be-, ver-, ent-, er-)**：完成式時 **絕不加 ge-**。
4.  **3 靜 4 動**：強記「3 靜 (Wo / Dativ / 不規則完成式)；4 動 (Wohin / Akkusativ / 規則完成式)」的對稱邏輯。