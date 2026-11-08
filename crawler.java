
package javaweb;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.nio.charset.Charset;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

public class crawler {


	public static void main(String[] args) throws IOException {
		List<String> code = getcode();
		make_file(code);
		System.exit(0);

	}





	//csvを読み込み、国民年金の投資先の内、東証に上場している株式のみを絞る動作
	public static List<String> getcode() throws IOException{
		Path pension = Paths.get("C:\\GPIF.csv");
		List<String> company_name = Files.readAllLines(pension, Charset.forName("SJIS"));
		Path stock_list = Paths.get("C:\\stocklist.csv");
		List<String> stock = Files.readAllLines(stock_list, Charset.forName("UTF-8"));
		List<String> stock_code = new ArrayList<String>();
		log("取得株_目録開始");
		for(int i = 0; i < company_name.size(); i++) {

			for(int e = 0; e < stock.size(); e++) {
				String[] code_list = stock.get(e).split(",");
				if(code_list[1].equals(company_name.get(i))) {

					//					log(stock.get(e));
					stock_code.add(stock.get(e));	
				}		
			}		
		}
		log("取得株_目録終了");

		return stock_code;
	}







	//株式コードを用いて、googlefinanceから最近の株価の情報を取得し、企業別のフォルダーにcsvファイルとして排出する動作。
	public static void make_file(List<String> code) throws IOException {
		log("データ取得開始");
		List<String> folder_list = new ArrayList<String>();
		
		// 외부 텍스트 파일에서 AEC 쿠키 값을 읽어옵니다.
		String aecCookie = "";
		try {
			aecCookie = new String(Files.readAllBytes(Paths.get("C:\\cookie\\cookie.txt")), Charset.forName("UTF-8")).trim();
		} catch (IOException e) {
			log("C:\\cookie\\cookie.txt ファイルを読み込めませんでした。クッキーなしで実行します。");
		}
		
		for(int i = 0; i < code.size(); i++) {

			try {
			LocalDateTime nowDate = LocalDateTime.now();
			DateTimeFormatter dtf3 = DateTimeFormatter.ofPattern("yyyy.MM.dd");
			DateTimeFormatter dtf4 = DateTimeFormatter.ofPattern("HH:mm");
			String formatNowDate = dtf3.format(nowDate);
			String Datetime = dtf4.format(nowDate);
			String financial_code = code.get(i).split(",")[0];
			String company_name = code.get(i).split(",")[1];
			String search_URL = "https://www.google.com/finance/quote/" + financial_code + ":TYO?hl=ja&gl=JP";

			String nikkei_URL = "https://www.nikkei.com/nkd/company/kessan/?scode=" + financial_code;
			Document doc = null;
			Document nikkei = null;
			try{
				doc = Jsoup.connect(search_URL)
						.userAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36")
						.cookie("AEC", aecCookie) // 텍스트 파일에서 읽어온 쿠키 값 적용
						.timeout(180_000).get();
				nikkei = Jsoup.connect(nikkei_URL).userAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64)").timeout(180_000).get();
			}catch (IOException e){
				log("異常終了" + company_name);
				continue;
			}
			
			
			
			//		株価
			// 부모 클래스(N6SYTe)를 기준으로 자손 span 태그를 찾아 주가를 가져옵니다.
			Elements financial = doc.select("div.N6SYTe span span");
			//		PER
			Elements find_per = doc.select("div.eYanAe");
			Elements find_per2 = find_per.select("div.gyFHrc");
			String PER = null;
			for(int a = 0; a < find_per2.size(); a++ ) {
				if (find_per2.get(a).select("div.mfs7Fc").text().equals("株価収益率")) {
					PER = find_per2.get(a).select("div.P6K39c").text();
					PER = PER.replaceAll(",","");
					break;
				}
			}

			//		純利益と純資産
			Elements find = doc.select("table.slpEwd");
			String profit = null;
			String asset = null;
			for(int a =0; a < find.size();a++) {
				Elements find2 = find.get(a).select("tr.roXhBd");
				for(int b = 0; b < find2.size(); b++ ) {
					if (find2.get(b).select("div.rsPbEe").text().equals("純利益")) {
						profit = find2.get(b).select("td.QXDnM").text();
						break;
					}
				}
				for(int b = 0; b < find2.size(); b++ ) {
					if (find2.get(b).select("div.rsPbEe").text().equals("純資産")) {
						asset = find2.get(b).select("td.QXDnM").text();
						break;
					}
				}

			}


			
			//			ROE
			double ROE= 0;
			double hiritsu=0;
			int break_flg = 0;
			Elements roe_tables = nikkei.body().getElementsByClass("bgcGray");
//			System.out.println(roe_tables);
			for(int c = 0; c < roe_tables.size(); c++) {

				if(roe_tables.get(c).text().contains("自己資本利益率（ROE）（%）")){
					Element roe_th = roe_tables.get(c);
//					System.out.println(roe_th);
					int recent_roe = roe_th.getElementsByClass("a-taR a-wordBreakAll").size() -1;
//					System.out.println(recent_roe);
					String ROE_string = roe_th.getElementsByClass("a-taR a-wordBreakAll").get(recent_roe).text();
					if(ROE_string.equals("--") || ROE_string.contains("－")) {
						ROE_string = "0";}
					ROE = Double.parseDouble(ROE_string);
//					System.out.println(company_name + ROE);
					break_flg = break_flg+1;
				}else{
//				System.out.println("失敗");
				}
				
//				自己資本比率
				if(roe_tables.get(c).text().contains("自己資本比率（%）")){
					Element hiritsu_th = roe_tables.get(c);
//					System.out.println(hiritsu_th);
					int recent_hiritsu = hiritsu_th.getElementsByClass("a-taR a-wordBreakAll").size() -1;
//					System.out.println(recent_hiritsu);
					String hiritsu_string = hiritsu_th.getElementsByClass("a-taR a-wordBreakAll").get(recent_hiritsu).text();
					if(hiritsu_string.equals("--") || hiritsu_string.contains("－")) {
						hiritsu_string = "0";}
					hiritsu = Double.parseDouble(hiritsu_string);
//					System.out.println(company_name + hiritsu);
					break_flg = break_flg+1;
				}
				if(break_flg == 2) {
					break;
				}
				
			}
			
			
			
			
			
			
			double profit_final = 0;
			double asset_final = 0;
			if(profit != null && asset != null) {
				profit = profit.replaceAll(",", "");
				asset = asset.replaceAll(",", "");
				if(profit.contains("万")) {
					profit = profit.replaceAll("万", "");
					profit_final = Double.parseDouble(profit);
					profit_final = profit_final * 10000;
				}else if(profit.contains("億")) {
					profit = profit.replaceAll("億", "");
					profit_final = Double.parseDouble(profit);
					profit_final = profit_final * 100000000;
				}else if(profit.contains("兆")) {
					profit = profit.replaceAll("兆", "");
					profit_final = Double.parseDouble(profit);
					profit_final = profit_final * 1000000000000L;
				}		
				if(asset.contains("万")) {
					asset = asset.replaceAll("万", "");
					asset_final = Double.parseDouble(asset);
					asset_final = asset_final * 10000;
				}else if(asset.contains("億")) {
					asset = asset.replaceAll("億", "");
					asset_final = Double.parseDouble(asset);
					asset_final = asset_final * 100000000;
				}else if(asset.contains("兆")) {
					asset = asset.replaceAll("兆", "");
					asset_final = Double.parseDouble(asset);
					asset_final = asset_final * 1000000000000L;
				}
			}


			String replace_name = company_name.replace("　", "");
			String replace_name2 = replace_name.replace("・", "`");
			if(financial.text().equals("")) {
				// 디버깅 용도: 주가를 찾지 못했을 때, Jsoup이 실제 응답받은 HTML을 C드라이브에 저장하여 확인합니다.
				try {
					java.nio.file.Files.write(java.nio.file.Paths.get("C:\\error_html_" + financial_code + ".html"), doc.outerHtml().getBytes("UTF-8"));
				} catch (Exception ex) {
					// 무시
				}
				
				continue;
			}
			File folderpath = new File("Z:\\Stock\\" + replace_name2);
			if(!(folderpath.exists())) {
				if (folderpath.mkdirs()) {
					log(company_name);
					log("フォルダの作成に成功しました");
				} else {
					log(company_name);
					log("フォルダの作成に失敗しました");
				}
			}

			String csv_path = folderpath + "\\" + formatNowDate + ".csv";
			File file = new File(csv_path);
			String price_beta = financial.text().replace(",", "");
			String price = price_beta.replaceAll("￥","");
			if(file.exists()) {
				try {
					FileWriter filewriter = new FileWriter(file,true);
					PrintWriter pw = new PrintWriter(new BufferedWriter(filewriter));
					pw.println(Datetime + "," + price+","+PER + "," + ROE + "," + profit_final + "," + asset_final+ ","+ hiritsu);
					pw.close();}
				catch(IOException e){
					log(company_name);
					log(e.toString());
				}

			}else {
				try {
					FileWriter filewriter = new FileWriter(file);
					filewriter.write(Datetime + "," + price+","+PER + "," + ROE + "," + profit_final + "," +asset_final+ ","+ hiritsu);
					filewriter.write("\r");
					filewriter.close();

				}catch(IOException e){
					log(company_name);
					log(e.toString());
				}
			}
			try {
				make_html_each(folderpath, replace_name2, Datetime, search_URL);}
			catch(IOException e){
				log(company_name);
				log(e.toString());
			}

			folder_list.add(folderpath.toString());

			} catch (Exception e) {
				log("予期せぬエラー発生（スキップして次へ進みます）: " + e.toString());
			}
			
			try {
				Thread.sleep(2000); // 크롤링 차단(봇 감지)을 피하기 위한 2초 대기
			} catch (InterruptedException ie) {
				Thread.currentThread().interrupt();
			}
		}
		log("データ取得終了");
		make_html(folder_list);
	}




	public static void make_html_each(File folderpath,String name, String Datetime, String search_URL) throws IOException {

		String main_path = folderpath.toString();
		File[] list = folderpath.listFiles(); 
		Path serve_path = Paths.get(main_path + "\\" + name +".html");
		File file = new File(main_path + "\\" + name +".html");
		if(file.exists()) {
			Files.delete(serve_path);
		}
		BufferedWriter writer = new BufferedWriter(new FileWriter(file));
		writer.write("<html lang=\"ja\">");
		writer.write("\r\n");
		writer.write("<head>");
		writer.write("\r\n");
		writer.write("<style>\r\n"
				+ "html{background-color: rgb(205, 235, 247);}\r\n"
				+ "th.gincode{width:150px}\r\n"
				+ "th.sitencode{width:150px}\r\n"
				+ "th.sitennamekana{width: 300px}\r\n"
				+ "th.sitenname{width:300px}\r\n"
				+ "th.ginname{width:300px}\r\n"
				+ "div.message{background-color: rgb(209, 247, 191);height: 50px; position: relative;} \r\n"
				+ "span.message1{position: absolute; top:25%;color:blue;}\r\n"
				+ "\r\n"
				+ "</style>");
		writer.write("<title>");
		writer.write("株整理");
		writer.write("</title>");
		writer.write("\r\n");
		writer.write("<meta charset='utf-8'/>");
		writer.write("\r\n");
		writer.write("</head>");
		writer.write("\r\n");
		writer.write("<body>");
		writer.write("\r\n");

		writer.write("<div class = \"message\" >\r\n"
				+ "<span id = \"message\" class=\"message1\">ロード中．．．</span>\r\n"
				+ "</div>\r\n");

		writer.write("\r\n");
		writer.write("<select id='ddl'>");
		writer.write("\r\n");
		writer.write("<option value='blank'></option>");
		for(int i = 0; i < list.length; i++) {
			String file_name = list[i].toString();
			if(!file_name.endsWith(".html")) {
				String file_real = file_name.replace( main_path + "\\", "");
				writer.write("<option value='"+ file_real + "'>" +file_real+ "</option>");
				writer.write("\r\n");
			}
		}
		writer.write("</select>");
		writer.write("\r\n");

		for(int i = 0; i < list.length; i++) {
			String file_name = list[i].toString();
			if(file_name.endsWith(".csv")) {
				Path date_csv = Paths.get(file_name);
				String table_id = file_name.replace(main_path + "\\","" );
				List<String> data = Files.readAllLines(date_csv, Charset.forName("SJIS"));
				writer.write("<table id='"+ table_id +"'border=\"1\" style=\"border-collapse: collapse; display: none;\">\r\n");
				writer.write("<tr style=\"background-color: yellow;\"><th class=\"date\">日付</th><th class=\"price\">金額</th><th class=\"PER\">PER</th><th class=\"ROE\">ROE</th><th class=\"profit\">純利益</th><th class=\"asset\">純資産</th><th class=\"hiritsu\">自己資本比率</th><th>リンク</th></tr>\r\n");
				for(int e = 0; e < data.size(); e++) {
					writer.write("<tr style=\"text-align: center\"><td>"+data.get(e).split(",")[0] +"</td><td>￥"+ data.get(e).split(",")[1]+"</td><td>"+data.get(e).split(",")[2] +"</td><td>"+ data.get(e).split(",")[3]+ "</td><td>" +data.get(e).split(",")[4] +"</td><td>"+ data.get(e).split(",")[5] +"</td><td>"+ data.get(e).split(",")[6] + "</td><td><a href='" +search_URL +"'>リンク</tr>");}
				writer.write("</table>");
			}
		}
		writer.write("\r\n");
		writer.write("<script src = '../kabu.js'></script>");
		writer.write("</body>");
		writer.write("</html>");
		writer.close();

	}





	public static void make_html(List<String> folder_list) throws IOException {
		log("全体html作成開始");
		String dir = "Z:\\Stock\\";
		File[] file_list = new File(dir).listFiles();
		File file = new File(dir + "目次.html");
		BufferedWriter writer = new BufferedWriter(new FileWriter(file));
		writer.write("<html lang=\\\"ja\\\">\r\n");
		writer.write("<head>");
		writer.write("\r\n");
		writer.write("<style>\r\n"
				+ "html{background-color: rgb(205, 235, 247);}\r\n"
				+ "th.gincode{width:150px}\r\n"
				+ "th.sitencode{width:150px}\r\n"
				+ "th.sitennamekana{width: 300px}\r\n"
				+ "th.sitenname{width:300px}\r\n"
				+ "th.ginname{width:300px}\r\n"
				+ "div.message{background-color: rgb(209, 247, 191);height: 50px; position: relative;} \r\n"
				+ "span.message1{position: absolute; top:25%;color:blue;}\r\n"
				+ "\r\n"
				+ "</style>");
		writer.write("<title>");
		writer.write("株目次");
		writer.write("</title>");
		writer.write("\r\n");
		writer.write("<meta charset='utf-8'/>");
		writer.write("\r\n");
		writer.write("</head>");
		writer.write("\r\n");
		writer.write("<body>");
		writer.write("\r\n");
		writer.write("\r\n");
		writer.write("<select id='ddl'>");
		writer.write("\r\n");
		writer.write("<option value='blank'></option>");
		for(int i = 0; i < file_list.length; i++) {
			String file_name = file_list[i].toString();
			if(!file_name.endsWith(".html")) {
				writer.write("<option value='"+ file_name.replace(dir, "") + "'>" +file_name.replace(dir, "")+ "</option>");
				writer.write("\r\n");
			}
		}
		writer.write("</select>");
		writer.write("\r\n");
		writer.write("<table>");
		writer.write("<tr style=\"background-color: yellow;\"><th class=\"date\">会社名</th><th class=\"price\">リンク</th></tr>\r\n");
		for(int i = 0; i < file_list.length; i++) {
			String file_name = file_list[i].toString();
			if(!file_name.endsWith(".html")) {
				writer.write("<tr style=\"text-align: center; displa:'none'; \" id = '"+ file_name.replace(dir, "") +"'><td>"+ file_name.replace(dir, "") +"</td><td><a href='"+ file_name +"\\"+ file_name.replace(dir,"") + ".html'>リンク</a></td></tr>");
				writer.write("\r\n");
			}
		}
		writer.write("</table>");
		writer.write("\r\n");
		writer.write("<script src = 'kabu.js'></script>");
		writer.write("</body>");
		writer.write("\r\n");

		writer.write("</html>");
		writer.close();
		log("全体html作成終了");

	}
	public static void log(String Log_text) throws IOException {
		LocalDateTime nowDate = LocalDateTime.now();
		DateTimeFormatter dtf3 = DateTimeFormatter.ofPattern("yyyyMMdd");
		String formatNowDate = dtf3.format(nowDate);
		File file = new File("Z:\\stock_log\\" + formatNowDate + "_log.txt");
		if(file.exists()) {
			try {
				FileWriter filewriter = new FileWriter(file,true);
				PrintWriter pw = new PrintWriter(new BufferedWriter(filewriter));

				pw.println(Log_text);
				pw.close();
			}
			catch(IOException e){
				System.out.println(e);
			}

		}else {
			try {
				FileWriter filewriter = new FileWriter(file);

				filewriter.write(Log_text);


				filewriter.close();

			}catch(IOException e){
				System.out.println(e);
			}
		}




	}
}