tabela = ['Atletico-MG','Internacional','São Paulo', 'Palmeiras','Vasco','Flamengo','Sport','Santos','Fortaleza','Atletico-PR','Fluminense','Ceará','Atlético-GO','Grêmio','Corinthians','Coxa','Bragantino','Botafogo','Goias','Bahia']
print('--'*20)
print(f'Lista dos times: {tabela}')
print('--'*20)
print(f'Quatro primeiros: {tabela[:4]}')
print('--'*20)
print(f'Quatro ultimos: {tabela[-4:]}')
print('--'*20)
print(f'Em ordem alfabética: {sorted(tabela)}')
print('--'*20)
print(f'O corinthians esta na {tabela.index("Corinthians")+1} posição')