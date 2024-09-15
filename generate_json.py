import os
import json
import sys

def generate_json_from_directory(directory):
    result = []
    
    # 遍歷主資料夾底下的資料夾
    for folder_name in os.listdir(directory):
        folder_path = os.path.join(directory, folder_name)
        
        if os.path.isdir(folder_path):
            # 遍歷每個主資料夾下的第一層子資料夾
            for sub_folder_name in os.listdir(folder_path):
                sub_folder_path = os.path.join(folder_path, sub_folder_name)
                
                if os.path.isdir(sub_folder_path):
                    # 將子資料夾名稱作為 type 欄位
                    folder_type = sub_folder_name
                    
                    # 查找子資料夾中的圖片文件
                    images = [f for f in os.listdir(sub_folder_path) if f.lower().endswith(('.png', '.jpg', '.jpeg', '.gif'))]
                    if images:
                        title = folder_name  # 主資料夾名稱作為 title
                        image = ','.join(images)
                        thumbnail = images[0]  # 默認第一張圖作為縮圖
                        
                        result.append({
                            "title": folder_type,  # 將子資料夾名稱作為 title
                            "image": image,
                            "thumbnail": thumbnail,
                            "type": title  # 將主資料夾名稱作為 type
                        })
    
    # 將結果按 title 進行排序
    result.sort(key=lambda x: x['title'].lower())
    
    return result

def main():
    # 獲取當前運行的 .exe 文件所在的目錄
    if getattr(sys, 'frozen', False):
        directory = os.path.dirname(sys.executable)  # 使用 sys.executable
    else:
        directory = os.path.dirname(os.path.abspath(__file__))  # 使用原始腳本文件路徑
    
    json_data = generate_json_from_directory(directory)
    
    output_file = os.path.join(directory, 'data.json')  # 將文件名稱改為 data.json
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(json_data, f, ensure_ascii=False, indent=4)
    
    print(f"JSON data has been saved to {output_file}")

if __name__ == "__main__":
    main()
