// スケジュールデータ
const schedule = [
    {
        startTime: "05:00",
        endTime: "05:45",
        title: "ディズニーホテルからウェスティンボナベンチャーホテルへ移動",
        description: "Uberで移動（約45分、$30-35）",
        icon: "🚗",
        location: "ウェスティンボナベンチャーホテル",
        address: "404 S Figueroa St, Los Angeles, CA 90071",
        url: "https://www.marriott.com/hotels/travel/laxwb-westin-bonaventure-hotel-and-suites-los-angeles/",
        tips: "• Uberアプリを事前にダウンロードしておきましょう\n• ホテル名を正確に入力してください\n• 早朝のため、事前にUberを予約することをお勧めします"
    },
    {
        startTime: "05:45",
        endTime: "06:15",
        title: "ウェスティンボナベンチャーホテルで荷物預け",
        description: "フロントデスクで荷物を預ける",
        icon: "🏨",
        location: "ウェスティンボナベンチャーホテル フロントデスク",
        address: "404 S Figueroa St, Los Angeles, CA 90071",
        url: "https://www.marriott.com/hotels/travel/laxwb-westin-bonaventure-hotel-and-suites-los-angeles/",
        tips: "• チェックイン時間は15:00からです\n• 荷物預けは無料です\n• フロントデスクは24時間対応しています"
    },
    {
        startTime: "06:15",
        endTime: "07:00",
        title: "サンタモニカビーチへ移動",
        description: "Uberで移動（約45分、$30-35）",
        icon: "🚗",
        location: "サンタモニカビーチ",
        address: "200 Santa Monica Pier, Santa Monica, CA 90401",
        url: "https://www.santamonica.com/things-to-do/santa-monica-beach/",
        tips: "• ビーチの駐車場は有料です\n• 早朝のため、事前にUberを予約することをお勧めします\n• ビーチまでの道順を確認しておきましょう"
    },
    {
        startTime: "07:00",
        endTime: "08:30",
        title: "サンタモニカビーチでサンライズ鑑賞",
        description: "ビーチウォーキング、写真撮影、サーファー観察",
        icon: "🌅",
        location: "サンタモニカビーチ",
        address: "200 Santa Monica Pier, Santa Monica, CA 90401",
        url: "https://www.santamonica.com/things-to-do/santa-monica-beach/",
        tips: "• 日の出は約6:15頃です\n• ビーチは朝早くから人がいます\n• 写真撮影に最適なスポット：パリセーズパーク\n• ヨガクラスに参加する場合は事前予約が必要です\n• サーフィンレッスンに参加する場合は事前予約が必要です"
    },
    {
        startTime: "08:30",
        endTime: "10:30",
        title: "サンタモニカファーマーズマーケット",
        description: "朝食、地元の雰囲気を楽しむ",
        icon: "🥐",
        location: "サンタモニカファーマーズマーケット",
        address: "220 Arizona Ave, Santa Monica, CA 90401",
        url: "https://www.smgov.net/portals/farmersmarket/",
        tips: "• 開催時間：日曜日 8:30-13:30\n• 現金を持参することをお勧めします\n• 地元の新鮮な野菜や果物が買えます\n• 朝食スタンドで食事ができます\n• 混雑する時間帯は9:00-11:00頃です"
    },
    {
        startTime: "10:30",
        endTime: "11:30",
        title: "Universal CityWalkへ移動",
        description: "Uberで移動（約60分、$35-40）",
        icon: "🚗",
        location: "Universal CityWalk",
        address: "100 Universal City Plaza, Universal City, CA 91608",
        url: "https://www.citywalkhollywood.com/",
        tips: "• 交通渋滞を考慮して余裕を持った移動時間を設定しましょう\n• 事前にUberを予約することをお勧めします\n• Universal CityWalkの駐車場は有料です"
    },
    {
        startTime: "11:30",
        endTime: "13:00",
        title: "Hello Kitty and Friends Cafe",
        description: "お菓子を楽しむ、限定グッズ購入",
        icon: "🍰",
        location: "Hello Kitty and Friends Cafe & Sanrio Smile Shop",
        address: "100 Universal City Plaza, Universal City, CA 91608",
        url: "https://www.sanrio.com/blogs/hellokittycafe/hello-kitty-and-friends-cafe-sanrio-smile-shop",
        tips: "• 営業時間：毎日 11:00-21:00\n• 人気店のため、事前予約を推奨します\n• 限定グッズは早めに購入することをお勧めします\n• 店内での写真撮影が可能です"
    },
    {
        startTime: "13:00",
        endTime: "14:30",
        title: "Universal CityWalkでランチ",
        description: "休憩、アメリカン料理を楽しむ",
        icon: "🍔",
        location: "Universal CityWalk",
        address: "100 Universal City Plaza, Universal City, CA 91608",
        url: "https://www.citywalkhollywood.com/",
        tips: "• おすすめレストラン：\n  - ハードロックカフェ（アメリカン料理）\n  - トニーローマズ（アメリカンバーベキュー）\n  - バッファローワイルドウィングス（アメリカンスポーツバー）\n• ランチタイムは混雑します\n• レストランによっては事前予約が必要です"
    },
    {
        startTime: "14:30",
        endTime: "17:30",
        title: "ユニバーサルスタジオハリウッド スタジオツアー",
        description: "映画やテレビ番組の撮影現場を見学",
        icon: "🎬",
        location: "ユニバーサルスタジオハリウッド",
        address: "100 Universal City Plaza, Universal City, CA 91608",
        url: "https://www.universalstudioshollywood.com/web/en/us/theme-functions/studio-tour",
        tips: "• スタジオツアー：約60分\n• 予算：$69/人\n• オンライン予約必須（2週間前から予約可能）\n• 予約URL: https://www.universalstudioshollywood.com/web/en/us/tickets-packages/studio-tour\n• カメラ持参可能です\n• ツアー中は歩きやすい靴を履くことをお勧めします"
    },
    {
        startTime: "17:30",
        endTime: "19:00",
        title: "ダウンタウンLAで夕食",
        description: "地元のレストランで食事",
        icon: "🍽️",
        location: "ダウンタウンLA",
        address: "Downtown Los Angeles, CA",
        url: "https://www.discoverlosangeles.com/things-to-do/downtown-los-angeles",
        tips: "• おすすめレストラン：\n  - クラフト＆バイン（高級ステーキとワイン）\n  - グランドセントラルマーケット内のレストラン\n  - リトルトーキョー周辺のレストラン\n  - ダウンタウンのステーキハウス\n• レストランによっては事前予約が必要です\n• 夕食時間は混雑します"
    },
    {
        startTime: "19:00",
        endTime: "23:00",
        title: "ダウンタウンLAのパブ巡り",
        description: "地元の雰囲気を楽しむ",
        icon: "🍺",
        location: "ダウンタウンLA",
        address: "Downtown Los Angeles, CA",
        url: "https://www.discoverlosangeles.com/things-to-do/downtown-los-angeles",
        tips: "• おすすめパブ：\n  - セブグランド（ウィスキーバー）\n  - エンジェルシティブリュワリー（地ビール醸造所）\n• パブによっては事前予約が必要です\n• 深夜の移動は避けることをお勧めします\n• 適度に楽しみましょう"
    },
    {
        startTime: "23:00",
        endTime: "24:00",
        title: "ウェスティンボナベンチャーホテルへ帰着",
        description: "Uberで移動（約15分、$15-20）",
        icon: "🚗",
        location: "ウェスティンボナベンチャーホテル",
        address: "404 S Figueroa St, Los Angeles, CA 90071",
        url: "https://www.marriott.com/hotels/travel/laxwb-westin-bonaventure-hotel-and-suites-los-angeles/",
        tips: "• 深夜のため、事前にUberを予約することをお勧めします\n• ホテル名を正確に入力してください\n• チェックイン時間は15:00からです"
    }
];

// 現在時刻を更新する関数
function updateCurrentTime() {
    const now = new Date();
    const laTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }));
    const jpTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Tokyo' }));
    
    const laTimeStr = laTime.toLocaleTimeString('ja-JP', { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: false 
    });
    
    const jpTimeStr = jpTime.toLocaleTimeString('ja-JP', { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: false 
    });
    
    document.getElementById('current-time').innerHTML = `
        <span>${laTimeStr}</span>
        <span style="font-size: 0.8em; color: #666;">(日本時間: ${jpTimeStr})</span>
    `;
}

// 時間を分に変換する関数
function timeToMinutes(time) {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
}

// 現在のアクティビティと次のアクティビティを更新する関数
function updateActivities() {
    const now = new Date();
    const laTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }));
    const currentMinutes = laTime.getHours() * 60 + laTime.getMinutes();
    
    let currentActivity = null;
    let nextActivity = null;
    
    for (let i = 0; i < schedule.length; i++) {
        const activity = schedule[i];
        const startMinutes = timeToMinutes(activity.startTime);
        const endMinutes = timeToMinutes(activity.endTime);
        
        if (currentMinutes >= startMinutes && currentMinutes < endMinutes) {
            currentActivity = activity;
            nextActivity = schedule[i + 1] || null;
            break;
        } else if (currentMinutes < startMinutes) {
            nextActivity = activity;
            currentActivity = i > 0 ? schedule[i - 1] : null;
            break;
        }
    }
    
    // 現在のアクティビティを更新
    if (currentActivity) {
        document.getElementById('current-title').textContent = currentActivity.title;
        document.getElementById('current-description').textContent = currentActivity.description;
        document.getElementById('current-details-button').dataset.index = schedule.indexOf(currentActivity);
    } else {
        document.getElementById('current-title').textContent = "準備中";
        document.getElementById('current-description').textContent = "スケジュールを開始する準備をしています";
        document.getElementById('current-details-button').dataset.index = -1;
    }
    
    // 次のアクティビティを更新
    if (nextActivity) {
        document.getElementById('next-title').textContent = nextActivity.title;
        document.getElementById('next-description').textContent = nextActivity.description;
        document.getElementById('next-details-button').dataset.index = schedule.indexOf(nextActivity);
    } else {
        document.getElementById('next-title').textContent = "準備中";
        document.getElementById('next-description').textContent = "次のアクティビティの準備をしています";
        document.getElementById('next-details-button').dataset.index = -1;
    }
}

// タイムラインを生成する関数
function generateTimeline() {
    const timelineContainer = document.getElementById('timeline-container');
    timelineContainer.innerHTML = '';
    
    schedule.forEach((activity, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.id = `timeline-item-${index}`;
        
        timelineItem.innerHTML = `
            <div class="timeline-time">${activity.startTime} - ${activity.endTime}</div>
            <div class="timeline-content">
                <h3>${activity.title}</h3>
                <p>${activity.description}</p>
                <button class="toggle-details-button" data-index="${index}">詳細を表示/非表示</button>
                <div class="activity-details" id="details-${index}">
                    <p><strong>場所:</strong> ${activity.location}</p>
                    <p><strong>住所:</strong> ${activity.address}</p>
                    <p><strong>URL:</strong> <a href="${activity.url}" target="_blank">${activity.url}</a></p>
                    <div class="activity-tips">
                        <p><strong>補足情報:</strong></p>
                        <pre>${activity.tips}</pre>
                    </div>
                </div>
            </div>
        `;
        
        timelineContainer.appendChild(timelineItem);
    });
    
    // 詳細表示/非表示ボタンのイベントリスナーを設定
    document.querySelectorAll('.toggle-details-button').forEach(button => {
        button.addEventListener('click', function() {
            const index = this.dataset.index;
            const detailsElement = document.getElementById(`details-${index}`);
            detailsElement.classList.toggle('active');
        });
    });
}

// 詳細表示ボタンのイベントリスナーを設定
function setupDetailsButtons() {
    document.getElementById('current-details-button').addEventListener('click', function() {
        const index = this.dataset.index;
        if (index >= 0) {
            const timelineItem = document.getElementById(`timeline-item-${index}`);
            timelineItem.scrollIntoView({ behavior: 'smooth' });
            const detailsElement = document.getElementById(`details-${index}`);
            detailsElement.classList.add('active');
            timelineItem.classList.add('active');
            
            // 3秒後にハイライトを解除
            setTimeout(() => {
                timelineItem.classList.remove('active');
            }, 3000);
        }
    });
    
    document.getElementById('next-details-button').addEventListener('click', function() {
        const index = this.dataset.index;
        if (index >= 0) {
            const timelineItem = document.getElementById(`timeline-item-${index}`);
            timelineItem.scrollIntoView({ behavior: 'smooth' });
            const detailsElement = document.getElementById(`details-${index}`);
            detailsElement.classList.add('active');
            timelineItem.classList.add('active');
            
            // 3秒後にハイライトを解除
            setTimeout(() => {
                timelineItem.classList.remove('active');
            }, 3000);
        }
    });
}

// 初期化
function init() {
    updateCurrentTime();
    updateActivities();
    generateTimeline();
    setupDetailsButtons();
    
    // 1秒ごとに更新
    setInterval(() => {
        updateCurrentTime();
        updateActivities();
    }, 1000);
}

// ページ読み込み時に初期化
document.addEventListener('DOMContentLoaded', init); 